from .portfolio_data import portfolio


def offline_answer(question):

    question = question.lower()


    # About Me

    if any(word in question for word in [

        "tell me about yourself",

        "introduce yourself",

        "about yourself",

        "who are you",

    ]):

        about = portfolio["about"]

        return (
            f"Hi, I'm {about['name']}. "
            f"I'm a {about['title']} specializing in "
            "Python, Django, FastAPI, REST APIs and PostgreSQL. "
            "I have completed two software development internships "
            "and enjoy building scalable backend systems and AI-powered applications."
        )


    # Hire Me

    if any(word in question for word in [

        "why should we hire you",

        "hire",

    ]):

        return (
            "I have practical backend development experience through internships, "
            "built multiple full-stack projects, solved 300+ LeetCode problems, "
            "and enjoy learning new technologies quickly."
        )


    # Strengths

    if any(word in question for word in [

        "strength",

        "strong points",

    ]):

        return (
            "My strengths include Python, Django, REST API development, "
            "database design, backend architecture, debugging, and problem solving."
        )


    # Weakness

    if "weakness" in question:

        return (
            "One area I'm continuously improving is advanced system design. "
            "I actively practice by building projects and studying scalable architectures."
        )


    return None