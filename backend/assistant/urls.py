from django.urls import path

from .views import chat

from .portfolio_views import (
    portfolio_data,
    portfolio_views,
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

    # 👇 NEW API
    path("portfolio/views/", portfolio_views),

    path("about/", about),
    path("projects/", projects),
    path("skills/", skills),
    path("experience/", experience),
    path("certificates/", certificates),
    path("contact/", contact),

]