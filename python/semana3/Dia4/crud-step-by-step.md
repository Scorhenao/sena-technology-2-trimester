## Documentación del Proyecto de Django

### 1. **Instalación de Django y Configuración del Entorno**

#### a) Crear un entorno virtual

Primero, necesitas crear un entorno virtual para mantener las dependencias del proyecto separadas de las del sistema global. Abre una terminal y ejecuta el siguiente comando:

```bash
# Crear un entorno virtual
python -m venv miEntorno

# Activar el entorno virtual (Windows)
miEntorno\Scripts\activate

# Activar el entorno virtual (Mac/Linux)
source miEntorno/bin/activate
```

#### b) Instalar Django y otras dependencias

Con el entorno virtual activado, instala Django y otras dependencias necesarias:

```bash
# Instalar Django
pip install django

# Instalar MySQL y pymysql para la base de datos
pip install mysqlclient pymysql
```

#### c) Crear un Proyecto Django

Una vez que tengas Django instalado, crea un proyecto Django:

```bash
# Crear un nuevo proyecto Django
django-admin startproject ejemplo1
```

Entra en el directorio del proyecto:

```bash
cd ejemplo1
```

#### d) Crear una App para Gestionar Productos

Crea una aplicación dentro del proyecto donde gestionarás los productos:

```bash
# Crear la app 'products'
python manage.py startapp products
```

#### e) Configurar la base de datos

En el archivo `settings.py` del proyecto, configura la base de datos MySQL (como ejemplo se utiliza `productosDB`):

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  # Usar el motor MySQL
        'NAME': 'productosDB',  # Nombre de la base de datos
        'USER': 'root',  # Usuario de la base de datos
        'PASSWORD': '1234',  # Contraseña del usuario
        'HOST': 'localhost',  # Servidor local de MySQL
        'PORT': '3306',  # Puerto de MySQL
    }
}
```

#### f) Crear las tablas en la base de datos

Para crear las tablas en la base de datos, ejecuta las migraciones:

```bash
# Crear las migraciones
python manage.py makemigrations

# Aplicar las migraciones
python manage.py migrate
```

### 2. **Definir el Modelo de Producto**

En el archivo `models.py` de la app `products`, define el modelo para los productos:

```python
from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.nombre
```

Luego, realiza las migraciones para crear la tabla `Producto` en la base de datos:

```bash
# Crear migraciones para el modelo Producto
python manage.py makemigrations products

# Aplicar las migraciones
python manage.py migrate
```

### 3. **Crear las Vistas (Views)**

Ahora, define las vistas que gestionarán los productos. En el archivo `views.py` de la app `products`, crea las vistas para listar, crear, actualizar, y eliminar productos.

```python
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Producto
from .forms import ProductoForm

# Vista para listar productos
class ProductListView(ListView):
    model = Producto
    template_name = 'productos/product_list.html'
    context_object_name = 'productos'

# Vista para detalle de producto
class ProductDetailView(DetailView):
    model = Producto
    template_name = 'productos/product_detail.html'

# Vista para crear un nuevo producto
class ProductCreateView(CreateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'productos/product_form.html'
    success_url = reverse_lazy('product_list')

# Vista para actualizar un producto existente
class ProductUpdateView(UpdateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'productos/product_form.html'
    success_url = reverse_lazy('product_list')

# Vista para eliminar un producto
class ProductDeleteView(DeleteView):
    model = Producto
    template_name = 'productos/product_confirm_delete.html'
    success_url = reverse_lazy('product_list')
```

### 4. **Crear Formularios para Productos**

En el archivo `forms.py` de la app `products`, crea un formulario para manejar la entrada de datos de productos:

```python
from django import forms
from .models import Producto

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['nombre', 'descripcion', 'precio']
```

### 5. **Configurar las URLs**

En el archivo `urls.py` de la app `products`, define las rutas para las vistas de productos.

```python
from django.urls import path
from . import views

urlpatterns = [
    path('productos/', views.ProductListView.as_view(), name='product_list'),
    path('productos/<int:pk>/', views.ProductDetailView.as_view(), name='product_detail'),
    path('productos/create/', views.ProductCreateView.as_view(), name='product_create'),
    path('productos/<int:pk>/update/', views.ProductUpdateView.as_view(), name='product_update'),
    path('productos/<int:pk>/delete/', views.ProductDeleteView.as_view(), name='product_delete'),
]
```

Luego, en el archivo `urls.py` del proyecto principal (`ejemplo1/urls.py`), incluye las rutas de la app `products`:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('products.urls')),  # Incluye las URLs de la app 'products'
]
```

### 6. **Crear Templates para las Vistas**

Para cada vista, crea una plantilla HTML en el directorio `templates/productos`. Ejemplos de plantillas:

**product_list.html**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Productos</title>
</head>
<body>
    <h1>Lista de Productos</h1>
    <ul>
        {% for producto in productos %}
            <li>{{ producto.nombre }} - ${{ producto.precio }}</li>
        {% endfor %}
    </ul>
    <a href="{% url 'product_create' %}">Crear nuevo producto</a>
</body>
</html>
```

**product_form.html**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Crear Producto</title>
</head>
<body>
    <h1>Crear Nuevo Producto</h1>
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Guardar</button>
    </form>
</body>
</html>
```

### 7. **Probar la API con Thunder (o Postman)**

Los endpoints de la API son los siguientes:

1. **Listar productos**
   - **Método**: `GET`
   - **URL**: `http://127.0.0.1:8000/api/productos/`

2. **Ver detalle de un producto**
   - **Método**: `GET`
   - **URL**: `http://127.0.0.1:8000/api/productos/{id}/`

3. **Crear un producto**
   - **Método**: `POST`
   - **URL**: `http://127.0.0.1:8000/api/productos/create/`
   - **Cuerpo (JSON)**:
     ```json
     {
       "nombre": "Nuevo Producto",
       "precio": 150.0,
       "descripcion": "Descripción del producto"
     }
     ```

4. **Actualizar un producto**
   - **Método**: `POST` o `PUT`
   - **URL**: `http://127.0.0.1:8000/api/productos/{id}/update/`
   - **Cuerpo (JSON)**:
     ```json
     {
       "nombre": "Producto Actualizado",
       "precio": 180.0,
       "descripcion": "Descripción actualizada"
     }
     ```

5. **Eliminar un producto**
   - **Método**: `DELETE`
   - **URL**: `http://127.0.0.1:8000/api/productos/{id}/delete/`


