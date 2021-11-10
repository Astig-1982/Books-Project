
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Author
from .serializers import AuthorSerializer

# Create your views here.

@api_view(['GET'])
def all_authors(request):
    """
    this view retrieves all authors
    """
    authors = Author.objects.all()
    serializer = AuthorSerializer(authors, many=True)
    return Response(serializer.data)