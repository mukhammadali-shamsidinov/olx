from django.contrib import admin
from .models import ElonImages,Elon,ElonComment,Category
# Register your models here.
admin.site.register([Elon,ElonImages,ElonComment,Category])