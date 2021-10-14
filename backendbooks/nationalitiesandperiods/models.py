from django.db import models

# Create your models here.

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
