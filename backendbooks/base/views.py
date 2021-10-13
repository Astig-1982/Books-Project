from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import APIView, api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def testApp(request):
    return Response('Hello world') 
