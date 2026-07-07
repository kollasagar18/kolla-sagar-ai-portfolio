from .portfolio_data import portfolio
from .memory import conversation_memory
from .resume_service import get_resume_summary
from .project_service import (
    get_project_ids,
    get_project_by_id,
    search_project,
    compare_projects,
)
from .recommendation_service import get_best_project
from .search_service import search_portfolio
from .recruiter_service import get_candidate_summary
from .dashboard_service import get_dashboard

# =====================================================
# Helper Functions
# =====================================================

def get_certificate_names():
    return portfolio["certificates"]


def get_experience():
    return portfolio["experience"]


def get_skills():
    return portfolio["skills"]


def get_education():
    return portfolio["about"]["education"]


def get_contact():
    return portfolio["contact"]


# =====================================================
# Memory Helpers
# =====================================================

def remember_projects():

    conversation_memory["last_topic"] = "projects"

    conversation_memory["last_projects"] = get_project_ids()

    conversation_memory["last_intent"] = "projects"
def get_selected_project():

    project_id = conversation_memory.get("selected_project")

    if not project_id:

        return None

    return get_project_by_id(project_id)

def remember_project(project_id):

    conversation_memory["selected_project"] = project_id

    conversation_memory["last_topic"] = "project"

    conversation_memory["last_intent"] = "project"



def detect_intent(question):

    question = question.lower().strip()

    conversation_memory["last_question"] = question
    # =====================================================
    # Follow-up Questions (Conversation Memory)
    # =====================================================

    project = get_selected_project()

    if project:

        if any(word in question for word in [

            "technology",

            "technologies",

            "tech stack",

            "tools",

            "used",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-tech",

                    "message": f'Technologies used in "{project["title"]}".',

                    "data": {

                        "technologies": project["tech"]

                    }

                }

            }

        if any(word in question for word in [

            "feature",

            "features",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-features",

                    "message": "Project Features",

                    "data": {

                        "features": project["features"]

                    }

                }

            }

        if any(word in question for word in [

            "problem",

            "challenge",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "text",

                    "message": project["problem"],

                    "data": {}

                }

            }

        if any(word in question for word in [

            "solution",

            "solve",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "text",

                    "message": project["solution"],

                    "data": {}

                }

            }

        if any(word in question for word in [

            "learning",

            "learn",

            "learned",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "list",

                    "message": "Key Learnings",

                    "data": {

                        "items": project["learning"]

                    }

                }

            }

        if any(word in question for word in [

            "future",

            "improvement",

            "improvements",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "list",

                    "message": "Future Improvements",

                    "data": {

                        "items": project["future_improvements"]

                    }

                }

            }

        if "role" in question:

            return {

                "handled": True,

                "response": {

                    "type": "text",

                    "message": f'My role was {project["role"]}.',

                    "data": {}

                }

            }

        if any(word in question for word in [

            "duration",

            "time",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "text",

                    "message": f'Duration: {project["duration"]}.',

                    "data": {}

                }

            }

        if "team" in question:

            return {

                "handled": True,

                "response": {

                    "type": "text",

                    "message": f'Team: {project["team"]}.',

                    "data": {}

                }

            }

        if "status" in question:

            return {

                "handled": True,

                "response": {

                    "type": "text",

                    "message": f'Current Status: {project["status"]}.',

                    "data": {}

                }

            }
    


    if question.startswith("search "):

        keyword = question.replace("search", "").strip()

        results = search_portfolio(keyword)

        if not results:

            return {

                "handled": True,

                "response": {

                    "type": "text",

                    "message": f'No results found for "{keyword}".',

                    "data": {}

                }

            }

        project_ids = [

            item["id"]

            for item in results

            if item["type"] == "project"

        ]

        return {

            "handled": True,

            "response": {

                "type": "projects",

                "message": f'Search results for "{keyword}".',

                "data": {

                    "projectIds": project_ids

                }

            }

        }
    if any(word in question for word in [

        "best project",

        "strongest project",

        "most difficult project",

        "most complex project",

        "proud project",

        "recommend project",

        "which project should i see",

    ]):

        project = get_best_project()

        return {

            "handled": True,

            "response": {

                "type": "project",

                "message": (

                    f'I recommend "{project["title"]}" because it '

                    "demonstrates backend development, REST APIs, "

                    "authentication, database design, and AI integration."

                ),

                "data": {

                    "projectId": project["id"]

                }

            }

        }
    project = search_project(question)

    if project:

        remember_project(project["id"])

        return {

            "handled": True,

            "response": {

                "type": "project",

                "message": f'Here are the details of "{project["title"]}".',

                "data": {

                    "projectId": project["id"]

                }

            }

        }
    
    # =====================================================
    # Compare Projects
    # =====================================================

    comparison = compare_projects(question)

    if comparison:

        return {

            "handled": True,

            "response": {

                "type": "compare-projects",

                "message": "Here's a comparison of the two projects.",

                "data": {

                    "projects": comparison

                }

            }

        }
    # =====================================================
    # All Projects
    # =====================================================

    if any(word in question for word in [

        "project",

        "projects",

        "portfolio",

        "work",

    ]):

        remember_projects()

        return {

            "handled": True,

            "response": {

                "type": "projects",

                "message": "Here are some of my featured projects.",

                "data": {

                    "projectIds": get_project_ids()

                }

            }

        }
    # =====================================================
    # Project Technologies
    # =====================================================

    selected_project = get_selected_project()

    if selected_project:

        if any(word in question for word in [

            "technology",

            "technologies",

            "tech",

            "tech stack",

            "language",

            "framework",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-tech",

                    "message": f'Technologies used in "{selected_project["title"]}".',

                    "data": {

                        "title": selected_project["title"],

                        "technologies": selected_project["tech"]

                    }

                }

            }
    # =====================================================
    # Project Features
    # =====================================================

    if selected_project:

        if any(word in question for word in [

            "feature",

            "features",

            "function",

            "functions",

            "functionalities",

            "modules",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-features",

                    "message": f'Features of "{selected_project["title"]}".',

                    "data": {

                        "title": selected_project["title"],

                        "features": selected_project["features"]

                    }

                }

            }
    # =====================================================
    # Project Problem
    # =====================================================

    if selected_project:

        if any(word in question for word in [

            "problem",

            "issue",

            "challenge",

            "why",

            "need",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-problem",

                    "message": f'Problem solved by "{selected_project["title"]}".',

                    "data": {

                        "title": selected_project["title"],

                        "problem": selected_project["problem"]

                    }

                }

            }
    # =====================================================
    # Project Highlights
    # =====================================================

    if selected_project:

        if any(word in question for word in [

            "highlight",

            "highlights",

            "best feature",

            "best part",

            "key points",

            "achievements",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-highlights",

                    "message": f'Highlights of "{selected_project["title"]}".',

                    "data": {

                        "title": selected_project["title"],

                        "highlights": selected_project["highlights"]

                    }

                }

            }
    # =====================================================
    # Responsibilities
    # =====================================================

    if selected_project:

        if any(word in question for word in [

            "responsibility",

            "responsibilities",

            "your role",

            "what did you do",

            "contribution",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-responsibilities",

                    "message": "My responsibilities were:",

                    "data": {

                        "responsibilities": selected_project["responsibilities"]

                    }

                }

            }
    # =====================================================
    # Learning
    # =====================================================

    if selected_project:

        if any(word in question for word in [

            "learning",

            "learn",

            "learned",

            "what did you learn",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-learning",

                    "message": "Here is what I learned.",

                    "data": {

                        "learning": selected_project["learning"]

                    }

                }

            }
    # =====================================================
    # Future Improvements
    # =====================================================

    if selected_project:

        if any(word in question for word in [

            "future",

            "future improvements",

            "improvements",

            "next version",

            "roadmap",

        ]):

            return {

                "handled": True,

                "response": {

                    "type": "project-future",

                    "message": "Future improvements planned:",

                    "data": {

                        "future": selected_project["future_improvements"]

                    }

                }

            }
    # =====================================================
    # Experience
    # =====================================================

    if any(word in question for word in [

        "experience",

        "internship",

        "intern",

        "company",

    ]):

        conversation_memory["last_topic"] = "experience"

        conversation_memory["last_intent"] = "experience"

        return {

            "handled": True,

            "response": {

                "type": "experience",

                "message": "Here is my internship experience.",

                "data": {

                    "experience": get_experience()

                }

            }

        }

    # =====================================================
    # Certificates
    # =====================================================

    if any(word in question for word in [

        "certificate",

        "certificates",

        "certification",

        "course",

    ]):

        conversation_memory["last_topic"] = "certificates"

        conversation_memory["last_intent"] = "certificates"

        return {

            "handled": True,

            "response": {

                "type": "certificate",

                "message": "Here are my certificates.",

                "data": {

                    "certificates": get_certificate_names()

                }

            }

        }
        # =====================================================
    # Skills
    # =====================================================

    if any(word in question for word in [

        "skill",

        "skills",

        "technology",

        "technologies",

        "tech",

        "tech stack",

    ]):

        conversation_memory["last_topic"] = "skills"

        conversation_memory["last_intent"] = "skills"

        return {

            "handled": True,

            "response": {

                "type": "skills",

                "message": "Here are my technical skills.",

                "data": get_skills()

            }

        }

    # =====================================================
    # Education
    # =====================================================

    if any(word in question for word in [

        "education",

        "college",

        "degree",

        "university",

        "btech",

    ]):

        conversation_memory["last_topic"] = "education"

        conversation_memory["last_intent"] = "education"

        return {

            "handled": True,

            "response": {

                "type": "education",

                "message": "Here is my educational background.",

                "data": get_education()

            }

        }

    # =====================================================
    # Contact
    # =====================================================

    if any(word in question for word in [

        "contact",

        "email",

        "phone",

        "linkedin",

        "github",

    ]):

        conversation_memory["last_topic"] = "contact"

        conversation_memory["last_intent"] = "contact"

        return {

            "handled": True,

            "response": {

                "type": "contact",

                "message": "Here are my contact details.",

                "data": get_contact()

            }

        }

   # =====================================================
    # Smart Greetings
    # =====================================================

    if any(word in question for word in [

        "hi",

        "hello",

        "hey",

        "good morning",

        "good afternoon",

        "good evening",

    ]):

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": (
                    "👋 Hello! I'm Kolla Sagar's AI Assistant.\n\n"

                    "I can help you explore:\n\n"

                    "✅ About Me\n"
                    "✅ Projects\n"
                    "✅ Project Technologies\n"
                    "✅ Project Features\n"
                    "✅ Project Highlights\n"
                    "✅ Project Responsibilities\n"
                    "✅ Project Learning\n"
                    "✅ Future Improvements\n"
                    "✅ Compare Projects\n\n"

                    "✅ Skills\n"
                    "✅ Experience\n"
                    "✅ Certificates\n"
                    "✅ Education\n"
                    "✅ Resume\n"
                    "✅ Resume Summary\n"
                    "✅ Contact Information\n\n"

                    "✅ Candidate Summary\n"
                    "✅ Recruiter Summary\n"
                    "✅ Best Project Recommendation\n"
                    "✅ Portfolio Search\n\n"

                    "💬 Try asking things like:\n"
                    "• Show my projects\n"
                    "• Compare inventory and notes project\n"
                    "• What technologies did you use?\n"
                    "• Download your resume\n"
                    "• Show candidate summary\n"
                    "• What are your skills?\n"
                    "• Tell me about your internships"
                ),

                "data": {}

            }

        }


    if any(word in question for word in [

        "thanks",

        "thank you",

        "thankyou",

    ]):

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": (
                    "😊 You're welcome! "
                    "Feel free to ask me anything about Kolla Sagar's portfolio."
                ),

                "data": {}

            }

        }


    if any(word in question for word in [

        "bye",

        "goodbye",

        "see you",

    ]):

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": (
                    "👋 Thanks for visiting Kolla Sagar's portfolio. "
                    "Have a wonderful day!"
                ),

                "data": {}

            }

        }
    if any(word in question for word in [

        "candidate summary",

        "candidate profile",

        "quick summary",

        "recruiter summary",

    ]):

        return {

            "handled": True,

            "response": {

                "type": "candidate-summary",

                "message": "Here's a quick summary of my profile.",

                "data": {

                    "summary": get_candidate_summary()

                }

            }

        }
    # =====================================================
    # Resume Intelligence
    # =====================================================

    if any(word in question for word in [

        "tell me about yourself",
        "summarize your resume",
        "resume summary",
        "resume overview",
        "about your resume",
        "why should i hire you",
        "strengths",
        "profile summary",

    ]):

        conversation_memory["last_topic"] = "resume_summary"

        conversation_memory["last_intent"] = "resume_summary"

        return {

            "handled": True,

            "response": {

                "type": "resume_summary",

                "message": "Here is a quick summary of my profile.",

                "data": get_resume_summary()

            }

        }
    # =====================================================
# Resume
# =====================================================

    if any(word in question for word in ["resume","cv","download resume","download cv",]):

        return {"handled": True,"response": {"type": "resume","message": "📄 You can download my latest resume below.","data": {"resume": portfolio["resume"]}}}

    # =====================================================
    # Recruiter Dashboard
    # =====================================================

    if any(word in question for word in [

        "dashboard",

        "recruiter dashboard",

        "profile dashboard",

    ]):

        return {

            "handled": True,

            "response": {

                "type": "dashboard",

                "message": "Recruiter Dashboard",

                "data": {

                    "dashboard": get_dashboard()

                }

            }

        }
    # =====================================================
    # Default
    # =====================================================

    return {

        "handled": False

    }