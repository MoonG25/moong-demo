from django.urls import path
from . import views

app_name = 'review'
urlpatterns = [
    path('index/', views.ReviewIndex.as_view(), name='index'),
    path('home/', views.ReviewHome.as_view(), name='home'),
]
