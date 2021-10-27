from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

urlpatterns = [
    path('', views.books_urls, name='books_urls'),
    path('all_books/', views.all_books, name='all_books'),
    path('all_books_alphabetical', views.all_books_alphabetical, name='all_books_alphabetical'),
    path('all_books/book_detailed/<book_id>', views.book_detailed, name='book-detailed')
]