# Qué he aprendido 
He aprendido a utilizar `FlatList` para representar arrays de objetos en React Native. También he entendido el recorrido completo: el `Service` proporciona el array, `fetch()` lo recibe, `useState` lo guarda y `FlatList` utiliza `data={productos}` para mostrar cada elemento. Además, he aprendido la función de `keyExtractor` para identificar de forma estable cada producto.

# Qué he modificado 
He he añadido un cuarto producto en el array del `ProductosService` y he modificado el frontend para representar cada producto como una tarjeta mediante `FlatList`, mostrando su emoji, nombre y precio.

# Resultado
La aplicación realiza automáticamente un `GET /productos`, recibe el array desde NestJS y lo guarda en el estado `productos`. Después, `FlatList` representa cada elemento como una tarjeta. El cuarto producto añadido también aparece correctamente en la lista.
