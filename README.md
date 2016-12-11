# calendarJS
An Calendar picker for JS vanilla, without need of any framework (v.1.0 for now, only in Spanish)
## Introducción
Proyecto de un fin de semana que consiste en la implementación de un calendario dinamico en las paginas webs sin la utilización de HTML5, compatible con la gran mayoria de navegadores (No prometo nada para IE6 xD), que dispone de selector de dias para elegir el que el usuario quiera, asi que tambien, la posibilidad de ir pasando los meses para elegir otra fecha.
## ¿Como lo implemento en mi web?
Muy sencillo, solo tienes que añadir dos o tres lineas, por si quieres la versión minified o no, y listo, finalmente solo tendras que crear un elemento input que tenga como clase 'calendar' y el JS se encargará del resto. 

Versión minified:
```html
<script type="text/javascript" src="calendar/calendar_min.js"></script>
<link rel="stylesheet" href="calendar/calendar_min.css">	
```

Versión completa:
```html
<script type="text/javascript" src="calendar/original/calendar_core.js"></script>
<script type="text/javascript" src="calendar/original/calendar_call.js"></script>
<link rel="stylesheet" href="calendar/original/calendar.css">
```

Elemento a añadir en tu web:
```html
<input type="text" class="calendar" />
```
## Funcionamiento interno
Esto funciona relativamente sencillo, hay dos ficheros el *core* y el *call*, el segundo funciona como *callback* llamando a las funciones presentes en el primero para crear el calendario, basicamente la estructura de la aplicación es estructurada, nada de orientado a objeto ni prototipos (que le den a prototype y ES6), así que se verá un montón de funciones llamadas en otra función que a su vez serán llamadas por eventos feos puestos en el codigo HTML a pelo (porque el eventListener no existe), pareciendo esto espagetis entrelazados, pero hay una cosa importante, funciona y eso oye no tiene precio...

No te voy a detallar cada función que hace, pero básicamente te diré las más importantes, esta el de Crear el div del calendario, esta la de generar Fecha y todo lo relacionado con ella para trabajar con ella despues (las variables globales son nuestras amigas), esta la de generar los dias del encabezado (si,si una funcion solo para eso.... codigo espageti), la de borrar la tabla (porque todo vale), y finalmente rellenarla con el mes elegido (me siento orgulloso de esta, aunque con tantos ifs deberia sentir verguenza, la verdad).

## Personalizar
Obvio el proyecto puede customizarse, yo propongo sobreescribir el CSS con otro fichero CSS si se trabaja con el minified, aunque si usais los originales haced lo que os plazcais, solo digo en el JS que todo empieza por la funcion *Load();*

##Final
Pues eso ya llegamos al final de esta maravillosa documentación, pero te preguntarás, porque haz hecho esto si ya existe un plugion para JQuery que lo hace mejor, y la respuesta es porque me dio la gana y porque odio JQuery, asi que, con eso y un bizcocho deseo a todos un feliz dia de programación.
