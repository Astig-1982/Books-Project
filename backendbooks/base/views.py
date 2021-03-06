from django.shortcuts import render
from django.db.models import Q
from rest_framework.decorators import api_view
from rest_framework.response import Response

import random

from .models import Book, Book_Type, Book_Genre
from .serializers import BookSerializer, BookTypeSerializer

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

    if 'author' in request.GET:
            author = request.GET['author']
            books = books.filter(author__name__exact=author)

    if 'type' in request.GET:
            type = request.GET['type']
            books = books.filter(type__name__exact=type)

    if 'genre' in request.GET:
            genre = request.GET['genre']
            books = books.filter(Q(genre1__name__exact=str(genre)) | Q(genre2__name__exact=str(genre)) | Q(genre3__name__exact=str(genre)))

    if 'sort' in request.GET:
        sort = request.GET['sort']
        if sort == 'default_order':
            books = books
        else:
            books = books.order_by(sort)
    
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

    # Q(pk = int(customerid)) | Q(customer_name__contains = str(customerid)) | Q(customer_mobile_no__contains = str(customerid))


@api_view(['GET'])
def book_detailed(request, book_id):
    """
    this view retrieves each individual book
    """
    book = Book.objects.get(id=book_id)
    serializer = BookSerializer(book, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def book_types(request):
    """
    this view retrieves book types
    """
    book_types = Book_Type.objects.all()
    serializer = BookTypeSerializer(book_types, many=True)
    return Response(serializer.data)
    

@api_view(['GET'])
def book_genres(request):
    """
    this view retrieves book types
    """
    book_genres = Book_Genre.objects.all()
    serializer = BookSerializer(book_genres, many=True)
    return Response(serializer.data)

    

