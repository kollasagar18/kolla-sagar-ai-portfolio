from .portfolio_data import portfolio


def get_dashboard():

    about = portfolio["about"]

    stats = portfolio["statistics"]

    best_project = portfolio["projects"][0]

    return {

        "name": about["name"],

        "title": about["title"],

        "projects": stats["projects"],

        "internships": stats["internships"],

        "certificates": stats["certificates"],

        "leetcode": stats["leetcode"],

        "best_project": best_project["title"],

        "skills": [

            "Python",

            "Django",

            "FastAPI",

            "React",

            "PostgreSQL",

        ]

    }