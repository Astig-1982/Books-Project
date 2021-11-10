from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Nationality
from .serializers import NatinalitySerializer

# Create your views here.

@api_view(['GET'])
def all_nationalities(request):
    """
    this view retrieves all authors
    """
    nationalities = Nationality.objects.all()
    serializer = NatinalitySerializer(nationalities, many=True)
    return Response(serializer.data)

# Create your views here.
