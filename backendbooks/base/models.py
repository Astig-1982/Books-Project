from django.db import models
from django.db.models.fields import BooleanField, DecimalField, IntegerField
from django.db.models.fields.related import ForeignKey

# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)


class Books(models.Model):
    name = models.CharField(max_length=254)
    # image = models.ImageField(null=True, blank=True)
    genre = ForeignKey('Genre', on_delete=models.SET_NULL, max_length=50, null=False, blank=True) #blank=True means the filed is required to be completed in django admin 
    author = ForeignKey('Author', on_delete=models.SET_NULL, max_length=254, null=False, blank=True)
    period = ForeignKey('Period', on_delete=models.SET_NULL, max_length=100, null=False, blank=True)
    year_of_writting = DecimalField(max_digits=4, null=True, blank=False)
    number_of_pages = DecimalField(null=False, blank=True)


class Author(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)
    sex = models.CharField(max_length=254, null=True, blank=False)
    nationality = ForeignKey('Nationality', on_delete=models.SET_NULL, null=True, blank=True)
    period = ForeignKey('Period', on_delete=models.SET_NULL, null=True, blank=True)
    still_alive = BooleanField(default=True, null=True, blank=True)



    
