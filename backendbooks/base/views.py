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
def all_books(request, order_by):
    """
    this view retrieves all books 
    """
    if order_by == 'default_order':
        books = Book.objects.all()
    elif order_by == 'a_to_z':
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

