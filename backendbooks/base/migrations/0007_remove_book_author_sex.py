# Generated by Django 3.2.6 on 2021-11-10 21:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_book_author_sex'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='author_sex',
        ),
    ]
