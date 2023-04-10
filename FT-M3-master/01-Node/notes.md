# Node JS

Es un entorno de Ejecución de JavaScript

## Objetivos:

- Qué es node
- Definir Características.
- Crear un Módulo.
- Construir un Proyecto Desde 0 (preparar un Entorno de Node).

### Temas
- Node
- Módulos y NPM

## ¿Qué es Node?
Es un entorno de Ejecución de JavaScript que está escrito en C++.

## Motor V8
Es un motor de Ejecución de JavaScript Open source pensado para Navegadores, este mantiene los estandares de ECMAScript. Este está escrito en C++. Una ventaja es que puede ejecutarse de manera Independiente para cualquier Aplicación de C++.

## libuv

El motor V8 únicamente podía correr código JavaScript. No había quién administrara los archivos para que estos fuesen pasados a V8. libuv fue pensado para estas funciones base, `libuv` nos permitió ahora en javascript el uso de _**módulos**_, ahora podemos interactuar con archivos, bases de datos, recibir y enviar datos de Internet, interpretar código y manejar asincronismo. Todo esto independientemente de la base de JavaScript.

## Chrome

El Navegador Google Chrome usa su motor V8 para ejecutar JavaScript, de por sí en sus Inicios JavaScript desde el Navegador es sincrono y es el JavaScript que conocemos.

## NodeJS

El entorno de ejecución de JavaScript aislado del navegador ya es asíncrono, gracias a la conexión entre el motor V8 y libuv para hacer uso de JavaScript como único lenguaje, Existe una fase en la que por medio de enlaces se unifican las funcionalidades de `libuv` con el Interprete de JavaScript escrito en C++ (El motor V8). De esta forma el Core de Node JS está listo.


# Módulos
Un módulo hace referencia a un Archivo que permite reutilizar su código contenido y su comportamiento no afecta el funcionamiento de Otros.

# NPM
Se trata de un Gestor de Paquetes de Node JS.

- Paquete: Es un módulo de código manejado y mantenido por un gestor de paquetes.
- Gestor de paquetes: Es un software que facilita la Instalación y actualización de Paquetes de Forma centralizada para ciertas tecnologías en particular.

Para el Caso de Node con JavaScript, se hace uso de `NPM`.

## Package.json

Es un archivo que nos permite tener información general Importante de nuestro proyecto.

```CMD
//Instalación de Pquetes
```

## Versionamiento

El versionamiento semántico sobre la gestión de módulos.
```
        1.2.9
       /  |   \
      /   |   Se arreglan bugs
     /  Se agrega una nueva funcionalidad compatible con el módulo actual. (Lo anterior sigue funcionando igual)
  Cambios grandes que reemplazan o eliminan funcionalidades a versiones anteriores.
```