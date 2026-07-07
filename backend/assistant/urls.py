from django.urls import path

from .views import chat

from .portfolio_views import (
    portfolio_data,
    about,
    projects,
    skills,
    experience,
    certificates,
    contact,
)

urlpatterns = [

    path("chat/", chat),

    path("portfolio/", portfolio_data),

    path("about/", about),

    path("projects/", projects),

    path("skills/", skills),

    path("experience/", experience),

    path("certificates/", certificates),

    path("contact/", contact),

]