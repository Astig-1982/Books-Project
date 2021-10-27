# Generated by Django 3.2.6 on 2021-10-26 19:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='genre',
        ),
        migrations.AddField(
            model_name='book',
            name='genre1',
            field=models.ForeignKey(max_length=50, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='main_genre', to='base.book_genre'),
        ),
        migrations.AddField(
            model_name='book',
            name='genre2',
            field=models.ForeignKey(blank=True, max_length=50, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='secondary_genre', to='base.book_genre'),
        ),
        migrations.AddField(
            model_name='book',
            name='genre3',
            field=models.ForeignKey(blank=True, max_length=50, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='third_genre', to='base.book_genre'),
        ),
        migrations.AddField(
            model_name='book',
            name='multiple_genre',
            field=models.BooleanField(blank=True, default=True, null=True),
        ),
    ]