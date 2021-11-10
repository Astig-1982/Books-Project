from rest_framework import serializers

from .models import Nationality

class NatinalitySerializer(serializers.ModelSerializer):
    """
    this serializer is for the Nationality model
    """

    class Meta:
        model = Nationality
        fields = '__all__'