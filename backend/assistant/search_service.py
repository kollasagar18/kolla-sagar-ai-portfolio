from .portfolio_data import portfolio


def search_portfolio(keyword):

    keyword = keyword.lower()

    results = []

    # Search Projects
    for project in portfolio["projects"]:

        text = (
            project["title"] +
            " " +
            project["description"] +
            " " +
            " ".join(project["tech"])
        ).lower()

        if keyword in text:

            results.append({

                "type": "project",

                "id": project["id"],

                "title": project["title"]

            })

    # Search Skills

    for category, skills in portfolio["skills"].items():

        for skill in skills:

            if keyword in skill.lower():

                results.append({

                    "type": "skill",

                    "title": skill

                })

    return results