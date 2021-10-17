from rest_framework import serializers

from .models import Author

class AuthorSerializer(serializers.ModelSerializer):
    """
    this serializer is for the Author model
    """
    class Meta:
        model = Author
        fields = '__all__'