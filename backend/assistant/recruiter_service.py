from .portfolio_data import portfolio


def get_candidate_summary():

    about = portfolio["about"]
    stats = portfolio["statistics"]

    return {

        "name": about["name"],

        "title": about["title"],

        "experience": stats["internships"],

        "projects": stats["projects"],

        "certificates": stats["certificates"],

        "leetcode": stats["leetcode"],

        "education": about["education"]["degree"]
                     + " - "
                     + about["education"]["branch"],

        "skills": [

            "Python",

            "Django",

            "FastAPI",

            "React",

            "PostgreSQL",

        ]

    }