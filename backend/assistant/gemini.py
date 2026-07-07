from google import genai

from django.conf import settings

from .prompts import build_prompt


client = genai.Client(
    api_key=settings.GEMINI_API_KEY
)


def ask_gemini(question):

    prompt = build_prompt(question)

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return response.text