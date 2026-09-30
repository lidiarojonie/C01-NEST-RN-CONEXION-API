# Qué he aprendido 
He aprendido qué es una petición `PATCH` y cómo utilizarla para modificar parcialmente un recurso. También he entendido el recorrido completo: React Native envía el `PATCH`, el Controller lo recibe, el Service modifica el array en memoria y la respuesta actualizada vuelve a la interfaz. Además, he aprendido que este cambio es temporal porque el array no está guardado en una base de datos.

# Qué he modificado 
He he añadido en React Native un botón **❤️ ME GUSTA** que realiza una petición `PATCH` a `/mascotas/1/like`. Después de recibir la respuesta del backend, actualizo la mascota mostrada con la nueva cantidad de likes.

# Resultado
Al pulsar **❤️ ME GUSTA**, React Native envía una petición `PATCH` a NestJS. El Controller recibe la petición y el Service incrementa los `likes` de la mascota en el array. La respuesta devuelve la mascota actualizada y la aplicación muestra la nueva cifra de likes. El cambio se mantiene mientras NestJS esté ejecutándose.
