from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Producto
from .forms import ProductoForm

class ProductListView(ListView):
    model = Producto
    template_name = 'productos/product_list.html'
    context_object_name = 'productos'

class ProductDetailView(DetailView):
    model = Producto
    template_name = 'productos/product_detail.html'

class ProductCreateView(CreateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'productos/product_form.html'
    success_url = reverse_lazy('product_list')

class ProductUpdateView(UpdateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'productos/product_form.html'
    success_url = reverse_lazy('product_list')

class ProductDeleteView(DeleteView):
    model = Producto
    template_name = 'productos/product_confirm_delete.html'
    success_url = reverse_lazy('product_list')
