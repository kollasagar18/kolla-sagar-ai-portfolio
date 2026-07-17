from django.http import JsonResponse

from .portfolio_data import portfolio
from .visitor_manager import update_views, get_views

def health(request):
    return JsonResponse({
        "status": "ok"
    })

#def portfolio_data(request):
    # Count every portfolio visit
#    update_views()

#    return JsonResponse(portfolio, safe=False)
def portfolio_data(request):

    print(">>>>>>>> PORTFOLIO API CALLED <<<<<<<<")

    update_views()

    return JsonResponse(portfolio, safe=False)


def portfolio_views(request):
    # Return current visitor statistics
    views = get_views()

    return JsonResponse({
        "today": views["today_views"],
        "total": views["total_views"],
    })


def about(request):
    return JsonResponse(portfolio["about"], safe=False)


def projects(request):
    return JsonResponse(portfolio["projects"], safe=False)


def skills(request):
    return JsonResponse(portfolio["skills"], safe=False)


def experience(request):
    return JsonResponse(portfolio["experience"], safe=False)


def certificates(request):
    return JsonResponse(portfolio["certificates"], safe=False)


def contact(request):
    return JsonResponse(portfolio["contact"], safe=False)