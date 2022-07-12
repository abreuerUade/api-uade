# Tabla de Contenidos
1. [Introducción](#introduction)
2. [Requisitos](#requirements)
3. [Instalación](#Instalación)
4. [Test](#Test)
4. [Documentación](#doc)


## Introducción
Esta documentacion corresponde al trabajo práctico de aplicaciones interactivas

> Librerias utilizadas:

| Libreria | Doc |
| ------ | ------ |
|javascript| https://www.w3schools.com/js |
| material ui | https://mui.com/material-ui/ |
| reactjs | https://es.reactjs.org/docs/getting-started.html |

## Requisitos
Es necesario tener descargados back-end y front-end, los cuales pueden ser encontrados en: 

| Proyecto | Link |
| ------ | ------ |
| **FRONT** | https://github.com/abreuerUade/api-uade |
| **BACK** | https://github.com/abreuerUade/tpo-api-server |


## Instalación
1. [Instalar Visual Studio Code](https://code.visualstudio.com)
2. Abrir alguno de los dos proyectos  
3. Abrir una nueva terminal y el siguientes comando para instalar las dependencias 
    - ```sh
        npm install        
        ``` 
> Debemos realizar esto con **ambos** proyectos (**BACK Y FRONT**)

## Test

Para hacer funcionar la aplicación es necesario correr el servidor de manera local. Para ello, con el proyecto **BACK** abierto en 
**Visual Studio Code**, ejecutar lo siguiente en la terminal de comandos:
```sh
npm start
```

Ahora, tambien con **vscode** abierto en nuestro proyecto **FRONT**, ejecutar en una terminal:

```sh
npm start
```

## Documentación
#### *Requerimientos*

| Requerimiento | Descripcion |
| ------------- | ----------- |
| **INGRESO USUARIOS** | *Los usuarios podrán ingresar a la aplicación con su mail y contraseña. Tendrán la posibilidad de solicitar una nueva en caso de olvidarla mediante la opción **OLVIDE CONTRASEÑA**. Se recomienda utilizar algún criterio de validación para el reseteo de la misma.* |
| **PERFIL USUARIOS REGISTRADOS**| *Los usuarios registrados podrán gestionar su nombre y cambiar contraseña.*|
| **REGISTRO DE RECETAS** | Los usuarios podrán registrar nuevas recetas en el sitio. Cada receta debe contar con: **nombre**, **categoria**, **ingredientes**, **procedimiento**, **dificultad (calificada de 1 a 5)** e **imagenes**. Las recetas creadas quedaran registradas en el sistema en estado borrador hasta que el usuario decida publicarlas.
| **MODIFICACION DE RECETAS** |  Los usuarios podrán modificar el contenido de sus recetas, quitarlas de publicación o publicarlas nuevamente.|
|**ELIMINACION DE RECETAS**| Los usuarios podrán eliminar sus recetas del sitio.|
|**CALIFICAR RECETAS**| Los usuarios registrados podrán calificar las recetas publicadas. Esta calificación debe poder visualizarse en el sitio principal para que los usuarios puedan filtrar recetas.|

#### *Diagrama de clases*

```mermaid
classDiagram
Class01 <| — AveryLongClass : Cool
Class03 * — Class04
Class05 o — Class06
Class07 .. Class08
Class09 → C2 : Where am i?
Class09 — * C3
Class09 — |> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 ←> C2: Cool label
```
 
## Equipo de Trabajo
- Andres Breuer
- Gianfranco Caneva
- Timoteo Güerini

