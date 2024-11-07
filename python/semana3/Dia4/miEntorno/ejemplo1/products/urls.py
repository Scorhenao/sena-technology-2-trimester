from django.urls import path
from . import views

urlpatterns = [
    path('productos/', views.ProductListView.as_view(), name='product_list'),
    path('productos/<int:pk>/', views.ProductDetailView.as_view(), name='product_detail'),
    path('productos/create/', views.ProductCreateView.as_view(), name='product_create'),
    path('productos/<int:pk>/update/', views.ProductUpdateView.as_view(), name='product_update'),
    path('productos/<int:pk>/delete/', views.ProductDeleteView.as_view(), name='product_delete'),
]
