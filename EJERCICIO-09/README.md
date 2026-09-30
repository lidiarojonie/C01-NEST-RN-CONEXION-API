# Qué he aprendido 
He aprendido a construir una URL dinámica desde React Native utilizando un valor introducido por el usuario. También he entendido el recorrido del `id`: nace en el estado de React Native, se incorpora a la URL, llega al Controller de NestJS mediante `@Param('id')` y permite obtener los datos correspondientes del Service.

# Qué he modificado 
He he creado en React Native un campo para introducir el ID, un botón **Buscar** y una ficha para mostrar el nombre, poder y universo del superhéroe. El ID introducido se incorpora dinámicamente a la URL `/heroes/:id`.

# Resultado
Al introducir un ID y pulsar **Buscar**, React Native construye la URL `GET /heroes/{id}` y realiza la petición a NestJS. El Controller recibe el ID mediante `@Param('id')`, obtiene el superhéroe correspondiente y devuelve sus datos, que después se muestran en la ficha de la aplicación.
