
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Elon
from .serializers import ElonSerializer

# Create your views here.
class ElonAPIView(APIView):
    def get(self,request):
        elon = Elon.objects.all()
        serializer = ElonSerializer(elon,many=True)
        return Response(
            data={
                "message": "Elons found",
                "data": serializer.data
            }
        )