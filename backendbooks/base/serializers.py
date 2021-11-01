from rest_framework import serializers

from .models import Book, Style
from authors.models import Author

class BookSerializer(serializers.ModelSerializer):
    """
    this serializer is for the Book model
    """
    author = serializers.StringRelatedField(many=False) # StringRelatedField is used to make the relation with Author model. It is used for author filed. Check StringRelatedField at django rest api documentation
    period = serializers.StringRelatedField(many=False)
    type = serializers.StringRelatedField(many=False)
    
    class Meta:
        model = Book
        fields = '__all__'