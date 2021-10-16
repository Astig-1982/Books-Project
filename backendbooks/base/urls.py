from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

urlpatterns = [
    path('', views.testApp, name='testApp'),
    path('books/', views.all_books, name='all_books'),
]