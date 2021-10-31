from rest_framework import serializers

from .models import Book, Style
from authors.models import Author

class BookSerializer(serializers.ModelSerializer):
    """
    this serializer is for the Book model
    """
    author = serializers.StringRelatedField(many=False)
    
    class Meta:
        model = Book
        fields = '__all__'