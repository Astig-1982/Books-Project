from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Book
from .serializers import BookSerializer

# Create your views here.

@api_view(['GET'])
def testApp(request):
    return Response('Hello world there')


@api_view(['GET'])
def all_books(request):
    """
    this view retrieves all books 
    """
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

