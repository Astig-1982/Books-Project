from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Author
from .serializers import AuthorSerializer

# Create your views here.

@api_view(['GET'])
def author_urls(request):
    authors_urls = [
        'all_authors/'
    ]
    return Response(authors_urls)


@api_view(['GET'])
def all_authors(request):
    authors = Author.objects.all()
    serializer = AuthorSerializer(authors, many=True)
    return Response(serializer.data)
