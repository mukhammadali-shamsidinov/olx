from django.urls import path
from .views import ElonAPIView

urlpatterns = [
    path('all/',ElonAPIView.as_view(),name="elon_all")
]