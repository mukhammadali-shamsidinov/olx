from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=150, required=False)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    class Meta:
        model = CustomUser
        fields = ['username','email','password']

    def create(self, validated_data):
        # Extract and remove 'password' from validated data since create_user expects it separately
        password = validated_data.pop('password', None)
        # Create the user with create_user method
        user = CustomUser.objects.create_user(**validated_data, password=password)
        return user