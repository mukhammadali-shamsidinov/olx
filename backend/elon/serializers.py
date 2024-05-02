from rest_framework import serializers

from .models import Elon,Category,ElonImages,ElonComment,CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username','email')

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElonImages
        fields = '__all__'
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
class ElonSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()
    category = CategorySerializer(many=True)
    images = ImagesSerializer(many=True)
    class Meta:
        model = Elon
        fields = '__all__'