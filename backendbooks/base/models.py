from django.db import models
from django.db.models.fields import IntegerField, TextField, BooleanField
from django.db.models.fields.related import ForeignKey

# Create your models here.

from authors.models import Author
from nationalitiesandperiods.models import Nationality, Period

class Book_Genre(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)

    def __str__(self):
        return self.name


class Book_Type(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)

    def __str__(self):
        return self.name


class Book(models.Model):
    name = models.CharField(max_length=254)
    image = models.ImageField(null=True, blank=True)
    type = ForeignKey(Book_Type, on_delete=models.SET_NULL, max_length=50, null=True, blank=True)
    multiple_genre = BooleanField(default=True, null=True, blank=True)
    genre1 = ForeignKey(Book_Genre, on_delete=models.SET_NULL, max_length=50, null=True, blank=False, related_name='main_genre') # blank=True means the filed is required to be completed in django admin
    genre2 = ForeignKey(Book_Genre, on_delete=models.SET_NULL, max_length=50, null=True, blank=True, related_name='secondary_genre')
    genre3 = ForeignKey(Book_Genre, on_delete=models.SET_NULL, max_length=50, null=True, blank=True, related_name='third_genre') 
    author = ForeignKey(Author, on_delete=models.SET_NULL, max_length=254, null=True, blank=False, related_name='authors')
    about = TextField(max_length=300, null=True, blank=False)
    summary = TextField(null=True, blank=False)
    period = ForeignKey(Period, on_delete=models.SET_NULL, max_length=100, null=True, blank=True)
    year_of_writting = IntegerField(null=True, blank=False)
    number_of_pages = IntegerField(null=False, blank=True) 

    def __str__(self):
        return self.name


class Style(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)

    def __str__(self):
        return self.name



    
