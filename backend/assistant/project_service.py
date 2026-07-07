from .portfolio_data import portfolio


# =====================================================
# Get All Projects
# =====================================================

def get_all_projects():
    return portfolio["projects"]

def compare_projects(question):

    question = question.lower()

    matched = []

    for project in portfolio["projects"]:

        title = project["title"].lower()

        words = title.split()

        if any(word in question for word in words):

            matched.append(project)

    if len(matched) >= 2:

        return matched[:2]

    return None
# =====================================================
# Get Project IDs
# =====================================================

def get_project_ids():
    return [
        project["id"]
        for project in portfolio["projects"]
    ]


# =====================================================
# Get Project By ID
# =====================================================

def get_project_by_id(project_id):

    for project in portfolio["projects"]:

        if project["id"] == project_id:

            return project

    return None


# =====================================================
# Get Project By Title
# =====================================================

def get_project_by_title(title):

    title = title.lower()

    for project in portfolio["projects"]:

        if project["title"].lower() in title:

            return project

    return None


# =====================================================
# Get Project By Index
# =====================================================

def get_project_by_index(index):

    projects = portfolio["projects"]

    if 0 <= index < len(projects):

        return projects[index]

    return None


# =====================================================
# Search Project
# =====================================================

def search_project(question):

    question = question.lower()

    for project in portfolio["projects"]:

        if project["title"].lower() in question:

            return project

    return None


# =====================================================
# Technologies
# =====================================================

def get_project_technologies(project):

    return project.get("tech", [])


# =====================================================
# Features
# =====================================================

def get_project_features(project):

    return project.get("features", [])


# =====================================================
# Highlights
# =====================================================

def get_project_highlights(project):

    return project.get("highlights", [])


# =====================================================
# Responsibilities
# =====================================================

def get_project_responsibilities(project):

    return project.get("responsibilities", [])


# =====================================================
# Learning
# =====================================================

def get_project_learning(project):

    return project.get("learning", [])


# =====================================================
# Future Improvements
# =====================================================

def get_project_future(project):

    return project.get("future_improvements", [])


# =====================================================
# GitHub
# =====================================================

def get_project_github(project):

    return project.get("github", "")


# =====================================================
# Demo
# =====================================================

def get_project_demo(project):

    return project.get("demo", "")


# =====================================================
# Role
# =====================================================

def get_project_role(project):

    return project.get("role", "")


# =====================================================
# Duration
# =====================================================

def get_project_duration(project):

    return project.get("duration", "")


# =====================================================
# Status
# =====================================================

def get_project_status(project):

    return project.get("status", "")


# =====================================================
# Category
# =====================================================

def get_project_category(project):

    return project.get("category", "")


# =====================================================
# Team
# =====================================================

def get_project_team(project):

    return project.get("team", "")


# =====================================================
# Problem
# =====================================================

def get_project_problem(project):

    return project.get("problem", "")


# =====================================================
# Solution
# =====================================================

def get_project_solution(project):

    return project.get("solution", "")