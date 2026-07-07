from .portfolio_data import portfolio


def get_resume_summary():

    about = portfolio["about"]

    education = about["education"]

    stats = portfolio["statistics"]

    return {
        "name": about["name"],
        "title": about["title"],
        "summary": about["summary"].strip(),
        "education": f'{education["degree"]} in {education["branch"]}',
        "college": education["college"],
        "experience": stats["experience"],
        "projects": stats["projects"],
        "internships": stats["internships"],
        "certificates": stats["certificates"],
        "leetcode": stats["leetcode"],
    }