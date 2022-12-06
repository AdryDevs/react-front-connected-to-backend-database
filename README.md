
# Rental Web

Proyecto grupal con el objetivo de crear la parte frontal de una web 
de alquiler de peliculas/series,consumiendo datos de una api. Tanto la 
api como la base de datos están alojadas en Railway,mientras que el deploy 
del fronted se ha realizado a través de Amazon Web Services.



## Autores

- [@Adrián Alonso](https://github.com/AdryDevs)
- [@Carlos Hidalgo](https://github.com/carlosHidalgo95)
- [@Juan Genovard](https://github.com/JuanGenovard)



## Deployment

El proyecto está publicado en la siguiente URL:

https://main.d3buhk8bk4svy7.amplifyapp.com/

Para ejecutar el proyecto de forma local se debe descargar y ejecutar el siguiente comando para descargar las dependencias:

```bash
  npm i
```
Una vez echo esto ejecutamos el proyecto con:

```bash
  npm start
```

## Documentación

Al entrar en la web se muestra la vista Home,con un pequeño cuadro de dialogo
indicando al usuario que se registre o loguee.

{imagen login}

En las secciones "Series" y "Movies" podemos encontrar un listado de las 
peliculas y series que se encuentran en la base de datos. 

{imagen vista general peliculas}

En la parte superior
hay un buscador que nos permite filtrar la información por título,actores y género:

{imagen con peliculas/series filtradas}

Al clickar en una de las peliculas/series entramos a la vista de detalle
donde podemos ver mas información del producto,también hay un botón que permite
al usuario alquilar el articulo en cuestión,el cual está desactivado si el usuario no está logueado.

{imagen de movieDetail}

En la vista de registro debemos ingresar los campos nombre de usuario,email,fecha de nacimiento y contraseña. 
En caso de que los datos sean incorrectos,se muestra un mensaje de error debajo del input correspondiente.
La contraseña debe estar compuesta por al menos 8 caracteres,una mayuscula,una minuscula y un número.

{imagen de register}

Estando logueados podemos acceder a la vista de userSettings,donde el usuario
puede modificar su nombre de usuario y/o contraseña.

{imagen de userSettings}

Por último,el usuario puede acceder a una vista con la información de sus
articulos alquilados. El administrador aquí accede a una vista con todos los pedidos 
de todos lo usuarios.

{imagen de orders}

{imagen de vista administrador}


## Principales tecnologías utilizadas

- React
- Redux
- React-Bootstrap
- React-router-dom
- Axios