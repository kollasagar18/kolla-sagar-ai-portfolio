from django.http import JsonResponse

from .portfolio_data import portfolio


def portfolio_data(request):

    return JsonResponse(portfolio, safe=False)


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