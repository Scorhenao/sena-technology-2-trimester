
# Configuración y Ejecución de un Proyecto Django

## Requisitos Previos
- Tener **Python** instalado en el sistema.
- Visual Studio Code (opcional).
- Git Bash o cualquier terminal de tu preferencia.

## Paso 1: Crear un Entorno Virtual
1. Abre Visual Studio Code o tu terminal preferida.
2. Navega al directorio en donde deseas crear tu proyecto.
3. Ejecuta el siguiente comando para crear un entorno virtual (puedes cambiar `miEntorno` por el nombre que prefieras):

    ```bash
    python -m venv miEntorno
    ```

4. Activa el entorno virtual:
   - En Windows con CMD:

     ```bash
     miEntorno\Scripts\activate
     ```

   - En Git Bash o PowerShell:

     ```bash
     .\miEntorno\Scripts\Activate.ps1
     ```

## Paso 2: Instalar Django
Con el entorno activado, instala Django ejecutando el siguiente comando:

```bash
py -m pip install Django
```

> **Nota:** Si ves un mensaje de advertencia sobre el PATH, puedes ignorarlo, pero asegúrate de tener el directorio de `Scripts` en tu PATH si deseas ejecutar `django-admin` globalmente.

Para verificar que Django se instaló correctamente, ejecuta:

```bash
py -m django --version
```

## Paso 3: Crear un Proyecto Django
1. Dentro del entorno virtual, crea un nuevo proyecto llamado `djangoProyecto1` (puedes cambiar el nombre si lo deseas):

    ```bash
    py -m django startproject djangoProyecto1
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd djangoProyecto1
    ```

## Paso 4: Ejecutar el Servidor de Desarrollo
Para iniciar el servidor de desarrollo y verificar que el proyecto funciona:

```bash
py manage.py runserver
```

Accede a [http://127.0.0.1:8000](http://127.0.0.1:8000) en tu navegador para ver la página de inicio de Django.

### Nota sobre Migraciones Pendientes
Si ves un mensaje indicando migraciones pendientes:

1. Detén el servidor con `CTRL + C`.
2. Ejecuta el siguiente comando para aplicar las migraciones:

    ```bash
    py manage.py migrate
    ```

3. Vuelve a ejecutar el servidor:

    ```bash
    py manage.py runserver
    ```

Con esto, tu proyecto estará listo y funcionando correctamente.

## Solución de Problemas Comunes
### Advertencia de PATH
Si el comando `django-admin` no se encuentra, asegúrate de que el entorno virtual esté activado o agrega el directorio de `Scripts` al PATH de tu sistema.

### Error 404 para `/favicon.ico`
Este error indica que el navegador intentó cargar un icono (`favicon.ico`). Puedes ignorarlo, ya que no afecta la funcionalidad de Django.

## Documentación Adicional
- [Documentación de Django](https://docs.djangoproject.com/en/stable/)
- [Visual Studio Code](https://code.visualstudio.com/)


