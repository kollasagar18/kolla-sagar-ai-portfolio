from datetime import date

from django.http import JsonResponse

from .models import VisitorCount


def count_visitor(request):

    visitor, created = VisitorCount.objects.get_or_create(id=1)

    today = date.today()

    if visitor.last_visit != today:

        visitor.today = 0
        visitor.last_visit = today

    visitor.today += 1
    visitor.total += 1

    visitor.save()

    return JsonResponse({

        "today": visitor.today,

        "total": visitor.total,

    })


def visitor_stats(request):

    visitor, created = VisitorCount.objects.get_or_create(id=1)

    return JsonResponse({

        "today": visitor.today,

        "total": visitor.total,

    })