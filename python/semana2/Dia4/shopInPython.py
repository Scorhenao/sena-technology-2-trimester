# **Ejemplo parte 1 : Tienda física**
class Producto:
    # Atributos de clase
    __impuesto = 0.15  # 15% de impuesto

    # Constructor
    def __init__(self, nombre, precio, cantidad):
        # Atributos de instancia privados
        self.__nombre = nombre
        self.__precio = precio
        self.__cantidad = cantidad

    # Método de instancia
    def MostrarDetalles(self):
        return f"Nombre: {self.__nombre}, Precio: {self.__precio}, Cantidad: {self.__cantidad}"

    # Método de clase
    @classmethod
    def CrearDesdeDiccionario(cls, data):
        return cls(data['nombre'], data['precio'], data['cantidad'])

    # Método estático
    @staticmethod
    def CalcularImpuesto(precio):
        return precio * Producto.__impuesto

    # Métodos get
    def getNombre(self):
        return self.__nombre

    def getPrecio(self):
        return self.__precio

    def getCantidad(self):
        return self.__cantidad

    # Métodos set
    def setNombre(self, nombre):
        self.__nombre = nombre

    def setPrecio(self, precio):
        self.__precio = precio

    def setCantidad(self, cantidad):
        self.__cantidad = cantidad

# Clase hija "ProductoElectronico" de clase padre "Producto"
class ProductoElectronico(Producto):
    def __init__(self, nombre, precio, cantidad, garantia):
        super().__init__(nombre, precio, cantidad)
        # Atributo de instancia adicional privado
        self.__garantia = garantia

    # Sobrescribiendo el método de instancia "MostrarDetalles"
    def MostrarDetalles(self):
        return f"Nombre: {self.getNombre()}, Precio: {self.getPrecio()}, Cantidad: {self.getCantidad()}, Garantía: {self.__garantia} años"

    # Métodos get y set para garantia
    def getGarantia(self):
        return self.__garantia

    def setGarantia(self, garantia):
        self.__garantia = garantia



# Clase hija "ProductoRopa" de clase padre "Producto"
class ProductoRopa(Producto):
    def __init__(self, nombre, precio, cantidad, talla, color):
        super().__init__(nombre, precio, cantidad)
        # Atributos de instancia adicionales privados
        self.__talla = talla
        self.__color = color

    # Sobrescribiendo el método de instancia "MostrarDetalles"
    def MostrarDetalles(self):
        return f"Nombre: {self.getNombre()}, Precio: {self.getPrecio()}, Cantidad: {self.getCantidad()}, Talla: {self.__talla}, Color: {self.__color}"

    # Métodos get y set para talla y color
    def getTalla(self):
        return self.__talla

    def getColor(self):
        return self.__color

    def setTalla(self, talla):
        self.__talla = talla

    def setColor(self, color):
        self.__color = color


# Creación de objetos de clases hijas
producto1 = ProductoElectronico("Laptop", 1000, 5, 2)
producto2 = ProductoRopa("Camisa", 50, 10, "M", "Rojo")

# Mostrar detalles
print(producto1.MostrarDetalles())
print(producto2.MostrarDetalles())

# Uso de métodos estáticos
print(f"Impuesto sobre Laptop: {Producto.CalcularImpuesto(producto1.getPrecio())}")

# Uso de get y set
print(producto1.getNombre())
producto1.setNombre("Laptop2")
print(producto1.getNombre())
