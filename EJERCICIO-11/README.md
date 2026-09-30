# Qué he aprendido 
He aprendido a utilizar `POST` para crear un nuevo recurso y a enviar datos en el cuerpo de una petición HTTP. También he entendido el recorrido del objeto: React Native recoge los datos, los convierte a JSON, los envía mediante `body`, NestJS los recibe con `@Body()` y el Service los añade al array.

# Qué he modificado 
He he añadido en React Native campos para introducir el nombre y el precio de un producto, junto con un botón **Añadir producto**. Al pulsarlo, envío el nuevo producto mediante una petición `POST` a `/productos` y después actualizo la lista.

# Resultado
La aplicación permite introducir un nombre y un precio y enviarlos a NestJS mediante `POST /productos`. React Native convierte los datos a JSON usando `JSON.stringify()` y los envía en el `body`. NestJS recibe el objeto mediante `@Body()`, lo añade al array del Service y, después, la aplicación vuelve a cargar la lista mostrando el nuevo producto.
