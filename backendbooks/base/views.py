from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def testApp(request):
    return JsonResponse('Hello world', safe=False)
