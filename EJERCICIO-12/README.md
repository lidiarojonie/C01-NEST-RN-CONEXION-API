# Qué he aprendido 
He aprendido a integrar en una sola aplicación los principales conceptos trabajados: `useState`, `useEffect`, `FlatList`, `fetch`, `GET` de colección, `GET` por Path Param y `PATCH`. También he comprendido el recorrido completo de un dato: React Native realiza la petición, el Controller de NestJS la recibe, el Service trabaja con el array y la respuesta vuelve a React Native para actualizar la interfaz.

# Qué he modificado 
He he integrado en una única aplicación el listado de criaturas, la selección de una criatura y la modificación de sus likes. He mantenido `useEffect`, `useState`, `FlatList`, `GET` por colección, `GET` por ID y `PATCH` para los likes, adaptando la interfaz para que todo funcione de forma conjunta.

# Resultado
La aplicación carga automáticamente la colección de criaturas desde `GET /criaturas` y la muestra mediante `FlatList`. Al seleccionar una criatura se realiza un `GET /criaturas/:id` y se muestran sus datos. Al pulsar **❤️ Me gusta**, se realiza un `PATCH /criaturas/:id/like`, se actualizan sus likes y se vuelve a cargar la lista.