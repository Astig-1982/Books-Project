from django.contrib import admin
from .models import Book, Book_Genre, Book_Type, Style

# Register your models here.

admin.site.register(Book)
admin.site.register(Book_Genre)
admin.site.register(Book_Type)
admin.site.register(Style)


