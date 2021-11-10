from rest_framework import serializers

from .models import Author

class AuthorSerializer(serializers.ModelSerializer):
    """
    this serializer is for the Author model
    """
    
    nationality = serializers.StringRelatedField(many=False)

    class Meta:
        model = Author
        fields = '__all__'