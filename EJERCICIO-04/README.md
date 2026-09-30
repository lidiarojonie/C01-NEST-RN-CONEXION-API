# Qué he aprendido 
He aprendido a utilizar @Query para recibir parámetros de consulta y a utilizar filter() para filtrar los datos de un array. También he aprendido a distinguir entre un Path Param, que identifica un recurso concreto, y un Query Param, que permite aplicar filtros o criterios a una petición.

# Qué he modificado 
He creado cuatro juegos en el array del JuegosService y he probado el endpoint GET /juegos tanto sin filtro como utilizando el filtro de género mediante ?genero=aventura.

# Resultado
El endpoint GET /juegos devuelve todos los juegos cuando no se indica ningún filtro y permite obtener únicamente los juegos de un género concreto cuando se utiliza un Query Param.