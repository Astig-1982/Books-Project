from django.contrib import admin
from .models import Book, Author, Book_Genre, Period, Nationality, Styles

# Register your models here.

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Book_Genre)
admin.site.register(Period)
admin.site.register(Nationality)
admin.site.register(Styles)


