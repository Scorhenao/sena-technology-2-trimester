# Ejercicio 4: Sistema de Gestión de Glosas
# Contexto: Crear un sistema para gestionar glosas en el ámbito de la salud, donde se registran los motivos de rechazo de facturas médicas, haciendo uso de los conceptos de POO. Debe incluir:

# Clase Padre: Glosa
# Atributos: codigo_glosa, descripcion, monto_rechazado
# Métodos: mostrar_info()

# Clases Hijas:
# GlosaPorFaltaDocumentacion
# Atributos adicionales: documentos_faltantes
# Método sobreescrito: mostrar_info()

# GlosaPorErrorDeFacturacion
# Atributos adicionales: tipo_error
# Método sobreescrito: mostrar_info() 

class Glosa:
    def __init__(self, codigo_glosa, descripcion, montoRechazado):
        try:
            if not isinstance(codigo_glosa, int):
                raise TypeError("El código de glosa debe ser un número entero.")
            if not isinstance(descripcion, str):
                raise TypeError("La descripción debe ser una cadena de texto.")
            if not isinstance(montoRechazado, (int, float)) or montoRechazado < 0:
                raise ValueError("El monto rechazado debe ser un número positivo.")
            
            self.__codigo_glosa = codigo_glosa
            self.__descripcion = descripcion
            self.__montoRechazado = montoRechazado
        except (TypeError, ValueError) as e:
            print(f"Error al crear la glosa: {e}")

    def mostrarInfo(self):
        try:
            return (f"Código de glosa: {self.__codigo_glosa}, "
                    f"Descripción: {self.__descripcion}, "
                    f"Monto rechazado: {self.__montoRechazado}.\n")
        except AttributeError as e:
            return f"Error al mostrar la información de la glosa: {e}"

    # Getters y setters
    def getCodigoGlosa(self):
        print(f"El codigo de la glosa es: {self.__codigo_glosa}")
        return self.__codigo_glosa
    def getDescripcion(self):
        print(f"La descripcion de la glosa es: {self.__descripcion}")
        return self.__descripcion
    def getMontoRechazado(self):
        print(f"EL moto rechazado de la glosa es: {self.__montoRechazado}")
        return self.__montoRechazado

    def setCodigoGlosa(self, codigoGlosa):
        try:
            self.__codigo_glosa = codigoGlosa
            print("¡Codigo de glosa setado exitosamente!")
        except Exception as e:
            print(f"Error al setear el codigo de glosa {e}")
        
    def setDescripcion(self, descripcion):
        try:
            self.__descripcion = descripcion
            print("¡Descripción seteada exitosamente!")
        except Exception as e:
            print(f"Error al setear la descripción de glosa{e}")
        
    def setMontoRechazado(self, montoRechazado):
        try:
            self.__montoRechazado = montoRechazado
            print("Monto rechazado seteado exitosamente!")
        except Exception as e:
            print(f"Error al setear el monto rechazado: {e}")

class GlosaPorFaltaDocumentacion(Glosa):
    def __init__(self, codigo_glosa, descripcion, monto_rechazado, documentosFaltantes):
        super().__init__(codigo_glosa, descripcion, monto_rechazado)
        if not isinstance(documentosFaltantes, str):
            raise TypeError("Documentos faltantes debe ser una cadena de texto.")
        self.__documentosFaltantes = documentosFaltantes

    def mostrarInfo(self):
        try:
            return (f"Código de glosa: {self.getCodigoGlosa()}, "
                    f"Descripción: {self.getDescripcion()}, "
                    f"Monto rechazado: {self.getMontoRechazado()}, "
                    f"Documentos faltantes: {self.__documentosFaltantes}.\n")
        except AttributeError as e:
            return f"Error al mostrar la información de glosa por falta de documentación: {e}"

    # Getters y setters
    def getDocumentosFaltantes(self):
        print(f"Los documentos faltantes son: {self.__documentosFaltantes}")
        return self.__documentosFaltantes
    
    def setDocumentosFaltantes(self, documentosFaltantes):
        try:
            self.__documentosFaltantes = documentosFaltantes
            print("¡Documento faltante seteado exitosamente!")
        except Exception as e:
            print(f"Error al setear el documento faltante: {e}")

class GlosaPorErrorDeFacturacion(Glosa):
    def __init__(self, codigo_glosa, descripcion, monto_rechazado, tipoError):
        super().__init__(codigo_glosa, descripcion, monto_rechazado)
        if not isinstance(tipoError, str):
            raise TypeError("Tipo de error debe ser una cadena de texto.")
        self.__tipoError = tipoError

    def mostrarInfo(self):
        try:
            return (f"Código de glosa: {self.getCodigoGlosa()}, "
                    f"Descripción: {self.getDescripcion()}, "
                    f"Monto rechazado: {self.getMontoRechazado()}, "
                    f"Tipo de error: {self.__tipoError}.\n")
        except AttributeError as e:
            return f"Error al mostrar la información de glosa por error de facturación: {e}"

    # Getters y setters
    def getTipoError(self):
        print(f"El tipo de error es: {self.__tipoError}")
        return self.__tipoError
    
    def setTipoError(self, tipoError):
        try:
            self.__tipoError = tipoError
            ("¡Tipo de error seteado exitosamente!")
        except Exception as e:
            print(f"Errror al setear el tipo de error: {e}")
# Ejemplo de uso con manejo de excepciones
try:
    print("---------- Objeto => Glosa----------")
    glosa1 = Glosa(1, "Glosa por falta de documentación", 500)
    print(glosa1.mostrarInfo())
    print("\n----------Get Codigo de glosa----------")
    glosa1.getCodigoGlosa()
    print("----------Get descripcion de glosa----------")
    glosa1.getDescripcion()
    print("----------Get monto rechazado de glosa----------")
    glosa1.getMontoRechazado()
    
    print("\n----------Set Codigo de glosa----------")
    glosa1.setCodigoGlosa(43)
    print("----------Set descripcion de glosa----------")
    glosa1.setDescripcion("Glosa por error de facturación 2.0")
    print("----------Set monto rechazado de glosa----------")
    glosa1.setMontoRechazado("Glosa por falta de documentación 2.0")

    print("\n----------Objeto => Glosa por falta de documentación----------")
    GlosaPorFaltaDocumentacion1 = GlosaPorFaltaDocumentacion(2, "Glosa por falta de documentación", 1000, "Documento de identidad")
    print(GlosaPorFaltaDocumentacion1.mostrarInfo())
    print("----------Get documentos faltantes----------")
    GlosaPorFaltaDocumentacion1.getDocumentosFaltantes()
    
    print("----------Set documentos faltantes----------")
    GlosaPorFaltaDocumentacion1.setDocumentosFaltantes("Documento de identidad 2.0")

    print("\n----------Objeto => Glosa error de facturación----------")
    GlosaPorErrorDeFacturacion1 = GlosaPorErrorDeFacturacion(3, "Glosa por error de facturación", 1500, "Error en la facturación")
    print(GlosaPorErrorDeFacturacion1.mostrarInfo())
    print("----------Get tipo de error----------")
    GlosaPorErrorDeFacturacion1.getTipoError()
    
    print("----------Set tipo de error----------")
    GlosaPorErrorDeFacturacion1.setTipoError("Error en la facturación 2.0")
except Exception as e:
    print(f"Error inesperado: {e}")