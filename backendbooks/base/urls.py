from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

urlpatterns = [
    path('', views.books_urls, name='books_urls'),
    path('all_books/default_order', views.all_books, name='all_books/default_order'),
    path('all_books/a_to_z', views.all_books_a_to_z, name='aall_books_a_to_z'),
    path('all_books/book_detailed/<book_id>', views.book_detailed, name='book-detailed')
]