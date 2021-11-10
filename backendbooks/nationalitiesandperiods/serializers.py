from rest_framework import serializers

from .models import Nationality

class NatinalitySerializer(serializers.ModelSerializer):
    """
    this serializer is for the Author model
    """
    
    nationality = serializers.StringRelatedField(many=False)

    class Meta:
        model = Nationality
        fields = '__all__'