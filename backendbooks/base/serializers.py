from rest_framework import serializers

from .models import Book, Book_Type


class BookSerializer(serializers.ModelSerializer):
    """
    this serializer is for the Book model
    """
    """
    author = serializers.SlugRelatedField(many=False, read_only='True', slug_field='name') # StringRelatedField is used to make the relation with Author model. It is used for author filed. Check StringRelatedField at django rest api documentation
    period = serializers.StringRelatedField(many=False)
    type = serializers.StringRelatedField(many=False)
    genre1 = serializers.StringRelatedField(many=False)
    genre2 = serializers.StringRelatedField(many=False)
    genre3 = serializers.StringRelatedField(many=False)
    """
    class Meta:
        model = Book
        fields = '__all__'
        depth = 2


class BookTypeSerializer(serializers.ModelSerializer):
    """
    this serializer is for the Book_Type model
    """
    class Meta:
        model = Book_Type
        fields = '__all__'





