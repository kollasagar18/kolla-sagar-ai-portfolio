from .memory import conversation_memory

from .project_service import (
    get_project_by_id,
    get_project_technologies,
    get_project_features,
    get_project_highlights,
    get_project_role,
    get_project_duration,
    get_project_problem,
    get_project_solution,
    get_project_github,
    get_project_demo,
)


def handle_conversation(question):

    question = question.lower()

    project_id = conversation_memory.get("selected_project")

    if not project_id:
        return None

    project = get_project_by_id(project_id)

    if not project:
        return None

    # -----------------------------
    # Technologies
    # -----------------------------

    if any(word in question for word in [

        "technology",
        "technologies",
        "tech",
        "stack",

    ]):

        return {

            "handled": True,

            "response": {

                "type": "list",

                "message": f'Technologies used in "{project["title"]}"',

                "data": {

                    "title": "Technologies",

                    "items": get_project_technologies(project)

                }

            }

        }

    # -----------------------------
    # Features
    # -----------------------------

    if "feature" in question or "features" in question:

        return {

            "handled": True,

            "response": {

                "type": "list",

                "message": f'Features of "{project["title"]}"',

                "data": {

                    "title": "Features",

                    "items": get_project_features(project)

                }

            }

        }

    # -----------------------------
    # Highlights
    # -----------------------------

    if "highlight" in question or "highlights" in question:

        return {

            "handled": True,

            "response": {

                "type": "list",

                "message": f'Highlights of "{project["title"]}"',

                "data": {

                    "title": "Highlights",

                    "items": get_project_highlights(project)

                }

            }

        }

    # -----------------------------
    # Role
    # -----------------------------

    if "role" in question:

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": f'My role was: {get_project_role(project)}',

                "data": {}

            }

        }

    # -----------------------------
    # Duration
    # -----------------------------

    if "duration" in question or "long" in question:

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": f'Project Duration: {get_project_duration(project)}',

                "data": {}

            }

        }

    # -----------------------------
    # Problem
    # -----------------------------

    if "problem" in question:

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": get_project_problem(project),

                "data": {}

            }

        }

    # -----------------------------
    # Solution
    # -----------------------------

    if "solution" in question:

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": get_project_solution(project),

                "data": {}

            }

        }

    # -----------------------------
    # GitHub
    # -----------------------------

    if "github" in question:

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": get_project_github(project),

                "data": {}

            }

        }

    # -----------------------------
    # Demo
    # -----------------------------

    if "demo" in question:

        return {

            "handled": True,

            "response": {

                "type": "text",

                "message": get_project_demo(project),

                "data": {}

            }

        }

    return None