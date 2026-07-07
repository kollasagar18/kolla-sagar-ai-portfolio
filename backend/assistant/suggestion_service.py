def get_suggestions(intent):

    suggestions = {

        "projects": [

            "Compare projects",

            "Which is your best project?",

            "Project technologies",

            "Project features",

        ],

        "project": [

            "What technologies were used?",

            "What problem does it solve?",

            "Future improvements",

            "What did you learn?",

        ],

        "skills": [

            "Backend skills",

            "Frontend skills",

            "AI skills",

            "Experience",

        ],

        "experience": [

            "Tell me about internships",

            "What technologies did you use?",

            "Projects",

            "Resume",

        ],

        "education": [

            "Certificates",

            "Skills",

            "Projects",

            "Resume",

        ],

        "certificate": [

            "Skills",

            "Projects",

            "Experience",

            "Resume",

        ],

        "resume": [

            "Projects",

            "Experience",

            "Skills",

            "Contact",

        ],

        "contact": [

            "Download resume",

            "Projects",

            "Experience",

            "Certificates",

        ],

        "text": [

            "Projects",

            "Skills",

            "Experience",

            "Resume",

        ],

    }

    return suggestions.get(intent, [
        "Projects",
        "Skills",
        "Experience",
        "Resume",
    ])