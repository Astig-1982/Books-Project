from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

import random

from .models import Book
from .serializers import BookSerializer

# Create your views here.

@api_view(['GET'])
def books_urls(request):
    books_urls = [
        'all_books/',
        'all_authors/'
    ]
    return Response(books_urls)


@api_view(['GET'])
def all_books(request):
    """
    this view retrieves all books 
    """
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def all_books_alphabetical(request):
    """
    this view retrieves all books 
    """
    books = Book.objects.all().order_by('name')
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def book_detailed(request, book_id):
    """
    this view retrieves each individual book
    """
    book = Book.objects.get(id=book_id)
    serializer = BookSerializer(book, many=False)
    return Response(serializer.data)

