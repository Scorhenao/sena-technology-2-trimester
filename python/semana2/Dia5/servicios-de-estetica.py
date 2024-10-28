# Asignado a  aprendiz Samuel Córdoba
# Ejercicio 7: Sistema de Gestión de Servicios de Estética
# Contexto: Crear un sistema para gestionar los servicios ofrecidos en una sala de estética, con un enfoque en tratamientos dermatológicos, haciendo uso de los conceptos de POO. Debe incluir:

# Clase Padre: ServicioEstetico
# Atributos: nombre_servicio, descripcion, costo, duracion
# Métodos: mostrar_info()

# Clases Hijas:
# TratamientoFacial
# Atributos adicionales: tipo_tratamiento, tipo_piel
# Método sobreescrito: mostrar_info()

# TratamientoCorporal
# Atributos adicionales: zona_tratada, tipo_productos
# Método sobreescrito: mostrar_info() Asignado a  aprendiz Samuel Córdoba

# Ejercicio 7: Sistema de Gestión de Servicios de Estética
# Contexto: Crear un sistema para gestionar los servicios ofrecidos en una sala de estética, con un enfoque en tratamientos dermatológicos, haciendo uso de los conceptos de POO. Debe incluir:

# Clase Padre: ServicioEstetico
# Atributos: nombre_servicio, descripcion, costo, duracion
# Métodos: mostrar_info()

# Clases Hijas:
# TratamientoFacial
# Atributos adicionales: tipo_tratamiento, tipo_piel
# Método sobreescrito: mostrar_info()
# TratamientoCorporal
# Atributos adicionales: zona_tratada, tipo_productos
# Método sobreescrito: mostrar_info()

class ServicioEstetico: 
    def __init__(self, nombre, descripcion, costo, duracion):
        self.__nombre = nombre
        self.__descripcion = descripcion
        self.__costo = costo
        self.__duracion = duracion
        
    def mostrarInfo(self):
        return f"Nombre: {self.__nombre}, Descripción: {self.__descripcion}, Costo: {self.__costo}, Duración: {self.__duracion}."

    #Metodos get
    def getNombre(self):
        return self.__nombre

    def getCosto(self):
        return self.__costo
    
    def getDuracion(self):
        return self.__duracion
    
    
    
    def getDescripcion(self):
        return self.__descripcion

class TratamientoFacial(ServicioEstetico):
    def __init__(self, nombre, descripcion, costo, duracion, tipoDeTratamiento, tipoDePiel):
        super().__init__(nombre, descripcion, costo, duracion)
        self.__tipoDeTratamiento = tipoDeTratamiento
        self.__tipoDePiel = tipoDePiel
        
    def mostrarInfo(self):
        return f"Nombre: {self.getNombre()}, Descipción: {self.getDescripcion()}, Costo: {self.getCosto()}, Duración {self.getDuracion()}, Tipo de tratamiento: {self.__tipoDeTratamiento}, Tipo de piel: {self.__tipoDePiel}."

class TratamientoCorporal(ServicioEstetico):
    def __init__(self, nombre, descripcion, costo, duracion, zonaTratada, tipoDeProductos):
        super().__init__(nombre, descripcion, costo, duracion)
        self.__zonaTratada = zonaTratada
        self.__tipoDeProductos = tipoDeProductos
        
    def mostrarInfo(self):
        return f"Nombre: {self.getNombre()} Descripción: {self.getDescripcion()}, Costo: {self.getCosto()}, Duración: {self.getDuracion()}, Zona tratada: {self.__zonaTratada}, Tipo de productos: {self.__tipoDeProductos}."

servicioEstetico1 = ServicioEstetico("Cortar puntas", "Corte de pelo con tirejas para las puntas", 1000, 60)
print(servicioEstetico1.mostrarInfo())

tratamientoFacial1 = TratamientoFacial("Limpieza de puntos negros", "uso de productos especiales para limpieza de puntos negros en la cara", 2000, 60, "Tratamiento facial", "Piel sensible")
print(tratamientoFacial1.mostrarInfo())

tratamientoCorporal1 = TratamientoCorporal("Meso terapias", "Utilización de inyecciones para mejorar circulación sanguinea", 3000, 60, "Zona femoral", "Oligo elementos")
print(tratamientoCorporal1.mostrarInfo())
