from django.contrib import admin
from django.urls import path, include,re_path
from . import views

urlpatterns = [
    path('',views.homepage,name="home"),
    path('wallet/',views.wallet,name = 'wallet'),
    path('import/',views.importpage , name = 'wallet')
]
