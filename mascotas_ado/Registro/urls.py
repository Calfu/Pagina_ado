from django.urls import path, include
from . import views
from django.contrib.auth.views import login_required

urlpatterns = [
    path('add_perro', views.PerroCreate.as_view(), name="add_perro"),

    path('list_perros/', views.PerroList.as_view(), name='list_perros'),

    path('edit_perro/<int:pk>', views.PerroUpdate.as_view(), name='edit_perro'),

    path('del_perro/<int:pk>', views.PerroDelete.as_view(), name='del_perro'),

]