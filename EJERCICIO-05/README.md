# Qué he aprendido 
He aprendido a realizar una petición HTTP desde React Native a una API de NestJS utilizando fetch, async/await y response.json(). También he aprendido que, al utilizar un dispositivo físico, es necesario utilizar la IP local del ordenador para que el móvil pueda comunicarse con NestJS.

# Qué he modificado 
He configurado la IP local del ordenador en API_URL, he conectado el botón de React Native con la función cargarMensaje y he realizado una petición fetch() al endpoint GET /mensaje.

# Resultado
React Native se conecta correctamente con NestJS mediante HTTP. Al pulsar el botón, la aplicación realiza una petición a GET /mensaje, recibe la respuesta en formato JSON y muestra en consola los datos recibidos.