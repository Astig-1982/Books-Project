from django.db import models
from django.db.models.fields import BooleanField, DecimalField, IntegerField, TextField
from django.db.models.fields.related import ForeignKey

# Create your models here.

class Book_Genre(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)

    def __str__(self):
        return self.name


class Book(models.Model):
    name = models.CharField(max_length=254)
    # image = models.ImageField(null=True, blank=True)
    genre = ForeignKey('Book_Genre', on_delete=models.SET_NULL, max_length=50, null=True, blank=True) # blank=True means the filed is required to be completed in django admin 
    author = ForeignKey('Author', on_delete=models.SET_NULL, max_length=254, null=True, blank=True)
    about = TextField(max_length=300, null=True, blank=False)
    summary = TextField(null=True, blank=False)
    period = ForeignKey('Period', on_delete=models.SET_NULL, max_length=100, null=True, blank=True)
    year_of_writting = IntegerField(null=True, blank=False)
    number_of_pages = IntegerField(null=False, blank=True)

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)
    # image = models.ImageField(null=True, blank=True)
    sex = models.CharField(max_length=254, null=True, blank=False)
    nationality = ForeignKey('Nationality', on_delete=models.SET_NULL, null=True, blank=True)
    period = ForeignKey('Period', on_delete=models.SET_NULL, null=True, blank=True)
    still_alive = BooleanField(default=True, null=True, blank=True)

    def __str__(self):
        return self.name


class Nationality(models.Model):
    class Meta:
        verbose_name_plural = 'Nationalities' # this will show 'Natinoalities' in django admin

    name = models.CharField(max_length=254, null=True, blank=False)

    def __str__(self):
        return self.name


class Period(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)
    time_frames = models.CharField(max_length=50, null=True, blank=False)

    def __str__(self):
        return self.name


class Style(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)

    def __str__(self):
        return self.name



    
