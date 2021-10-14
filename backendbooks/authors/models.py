from django.db import models
from django.db.models.fields import BooleanField
from django.db.models.fields.related import ForeignKey

# Create your models here.

from nationalitiesandperiods.models import Nationality, Period

class Author(models.Model):
    name = models.CharField(max_length=254, null=True, blank=False)
    # image = models.ImageField(null=True, blank=True)
    sex = models.CharField(max_length=254, null=True, blank=False)
    nationality = ForeignKey(Nationality, on_delete=models.SET_NULL, null=True, blank=True)
    period = ForeignKey(Period, on_delete=models.SET_NULL, null=True, blank=True)
    still_alive = BooleanField(default=True, null=True, blank=True)

    def __str__(self):
        return self.name
