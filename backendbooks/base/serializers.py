from rest_framework import serializers

from .models import Book, Style

class BookSerializer(serializers.ModelSerializer):
    """
    this serializer is for the Book model
    """
    class Meta:
        model = Book
        fields = '__all__'