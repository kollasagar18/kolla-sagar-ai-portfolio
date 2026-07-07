from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json
import traceback

from .gemini import ask_gemini
from .intent_router import detect_intent
from .conversation_engine import handle_conversation
from .suggestion_service import get_suggestions

from .offline_ai import offline_answer
@csrf_exempt
def chat(request):

    if request.method != "POST":

        return JsonResponse(
            {
                "error": "POST request required."
            },
            status=405
        )

    try:

        body = json.loads(request.body)

        question = body.get("message", "").strip()

        if not question:

            return JsonResponse(
                {
                    "error": "Message is required."
                },
                status=400
            )

        # =====================================================
        # 1. Conversation Engine
        # =====================================================

        conversation = handle_conversation(question)

        if conversation:

            response = conversation["response"]

        else:

            # =====================================================
            # 2. Intent Router
            # =====================================================

            intent = detect_intent(question)

            if intent["handled"]:

                response = intent["response"]

            else:

                # =====================================================
                # 3. Gemini AI
                # =====================================================

                try:

                    ai_response = ask_gemini(question)

                    ai_response = ai_response.strip()

                    # Remove Markdown code blocks
                    if ai_response.startswith("```"):

                        lines = ai_response.splitlines()

                        if lines:

                            lines = lines[1:]

                        if lines and lines[-1].strip() == "```":

                            lines = lines[:-1]

                        ai_response = "\n".join(lines).strip()

                    try:

                        response = json.loads(ai_response)

                    except json.JSONDecodeError:

                        response = {

                            "type": "text",

                            "message": ai_response,

                            "data": {}

                        }

                except Exception as e:

                    error = str(e).lower()

                    print("\n" + "=" * 80)
                    print("GEMINI ERROR")
                    traceback.print_exc()
                    print("=" * 80 + "\n")

                    # =====================================================
                    # Gemini Quota Exceeded
                    # =====================================================
                    offline = offline_answer(question)

                    if offline:

                        response = {

                            "type": "text",

                            "message": offline,

                            "data": {}

                        }

                        response["suggestions"] = get_suggestions("text")

                        return JsonResponse({

                            "success": True,

                            **response

                        })              
                    if "resource_exhausted" in error or "429" in error:

                        response = {

                            "type": "text",

                            "message":
                            (
                                "🤖 AI Assistant is temporarily unavailable.\n\n"
                                "The AI service has reached today's request limit.\n\n"
                                "You can still explore:\n\n"
                                "• Projects\n"
                                "• Skills\n"
                                "• Experience\n"
                                "• Resume\n"
                                "• Certificates\n"
                                "• Contact Information\n\n"
                                "Please try again later."
                            ),

                            "data": {}

                        }
                    
                    # =====================================================
                    # Timeout
                    # =====================================================

                    elif "timeout" in error:

                        response = {

                            "type": "text",

                            "message":
                            (
                                "⏳ The AI is taking longer than expected.\n\n"
                                "Please try again in a few moments."
                            ),

                            "data": {}

                        }

                    # =====================================================
                    # Internet / Network
                    # =====================================================

                    elif "connection" in error or "network" in error:

                        response = {

                            "type": "text",

                            "message":
                            (
                                "🌐 Unable to connect to the AI service.\n\n"
                                "Please check your internet connection and try again."
                            ),

                            "data": {}

                        }

                    # =====================================================
                    # Unknown AI Error
                    # =====================================================

                    else:

                        response = {

                            "type": "text",

                            "message":
                            (
                                "⚠️ The AI Assistant is temporarily unavailable.\n\n"
                                "You can still ask about my portfolio, projects, "
                                "skills, experience, certificates, resume, and "
                                "contact information."
                            ),

                            "data": {}

                        }

        # =====================================================
        # AI Suggestions
        # =====================================================

        response["suggestions"] = get_suggestions(

            response.get("type", "text")

        )

        return JsonResponse({

            "success": True,

            **response

        })

    except Exception as e:

        print("\n" + "=" * 80)
        print("CHAT API ERROR")
        traceback.print_exc()
        print("=" * 80 + "\n")

        return JsonResponse({

            "success": True,

            "type": "text",

            "message":
            (
                "⚠️ Something unexpected happened.\n\n"
                "Please refresh the page and try again."
            ),

            "data": {},

            "suggestions": [

                "Projects",

                "Skills",

                "Resume",

                "Experience"

            ]

        })