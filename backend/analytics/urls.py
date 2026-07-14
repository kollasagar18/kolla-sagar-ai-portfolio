from django.urls import path

from .views import count_visitor, visitor_stats

urlpatterns = [

    path("count/", count_visitor),

    path("stats/", visitor_stats),

]