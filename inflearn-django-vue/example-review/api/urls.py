from django.urls import path
from . import views

app_name = 'api'
urlpatterns = [
    path('review/list/', views.ApiReviewLV.as_view(), name='list'),
    path('review/<int:pk>/delete/', views.ApiReviewDelV.as_view(), name='delete'),
    path('review/create/', views.ApiReviewCV.as_view(), name='create'),
]