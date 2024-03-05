# Backend para la Biblioteca Mística de Thalindor

Este proyecto del backend está desarrollado utilizando Flask, un microframework de Python para desarrollar aplicaciones web fácilmente.

## Pre-requisitos

- Python 3.11 o superior.
- pip (el gestor de paquetes de Python).
- Un entorno virtual, recomendamos `virtualenv` o `venv`.

## Configuración del Entorno de Desarrollo

### Creación y Activación del Entorno Virtual

Desde la raiz del proyecto clonado, navega a la carpeta `backend`:

```bash
cd backend
```

#### Linux/macOS

```bash
python3 -m venv backend_biblioteca
source backend_biblioteca/bin/activate 
```

#### Windows (CMD)

```bash
python -m venv backend_biblioteca
.\backend_biblioteca\Scripts\activate
```

#### Windows (PowerShell)

```bash
python -m venv backend_biblioteca
.\backend_biblioteca\Scripts\Activate.ps1
```

### Instalación de Flask

Una vez activado el entorno virtual, instala Flask usando pip:

```bash
pip install Flask
```

#### Ejecución de la Aplicación

```bash
flask run
```
