from django.db import models

from users.models import CustomUser


# Create your models here.
class ElonImages(models.Model):
    image = models.ImageField(upload_to='images/')

class Category(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name




class Elon(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    body = models.TextField()
    images = models.ManyToManyField(ElonImages,related_name='elons')
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    location = models.URLField()
    view = models.IntegerField(default=0)
    category = models.ManyToManyField(Category, related_name='elon_category')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    poster = models.ImageField(upload_to='poster/')
    adress = models.TextField()
    phone_number = models.CharField(max_length=11)

    def __str__(self):
        return self.title



class ElonComment(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    elon = models.ForeignKey(Elon, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment