# **Ejemplo parte 1 : Tienda física**
class Producto:
    # Atributos de clase
    impuesto = 0.15  # 15% de impuesto

#Constructor
def __init__(self, nombre, precio, cantidad):
    # Atributos de instancia
    self.nombre = nombre
    self.precio = precio
    self.cantidad = cantidad

# Método de instancia
def MostrarDetalles(self):
    return f"Nombre: {self.nombre}, Precio: {self.precio}, Cantidad: {self.cantidad}"

# Método de clase
@classmethod #Decorador
def CrearDesdeDiccionario(cls, data):
    return cls(data['nombre'], data['precio'], data['cantidad'])

# Método estático
@staticmethod #Decorador
def CalcularImpuesto(precio):
    return precio * Producto.impuesto

#Clase hija "ProductoElectrónico" de clase padre "Producto"
class ProductoElectrónico(Producto):
    def __init__(self, nombre, precio, cantidad, garantia):
        super().__init__(nombre, precio, cantidad)
        # Atributo de instancia adicional
        self.garantia = garantia

def MostrarDetalles(self):
    # Sobrescribiendo el método de instancia "MostrarDetalles"
    return f"Nombre: {self.nombre}, Precio: {self.precio}, Cantidad: {self.cantidad}, Garantía: {self.garantia} años"

#Clase hija "ProductoRopa" de clase padre "Producto"
class ProductoRopa(Producto):
    def __init__(self, nombre, precio, cantidad, tamaño, color):
        super().__init__(nombre, precio, cantidad)
        # Atributos de instancia adicionales
        self.tamaño = tamaño
        self.color = color

    def MostrarDetalles(self):
        # Sobrescribiendo el método de instancia "MostrarDetalles"
        return f"Nombre: {self.nombre}, Precio: {self.precio}, Cantidad: {self.cantidad}, Tamaño: {self.tamaño}, Color: {self.color}"


# Creación de objetos de clases hijas
producto1 = ProductoElectrónico("Laptop", 1000, 5, 2)
producto2 = ProductoRopa("Camisa", 50, 10, "M", "Rojo")

print(producto1.MostrarDetalles())
print(producto2.MostrarDetalles())
print(f"Impuesto sobre Laptop: {Producto.CalcularImpuesto(producto1.precio)}")