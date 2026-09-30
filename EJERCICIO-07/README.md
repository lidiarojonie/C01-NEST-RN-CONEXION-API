# Qué he aprendido 
He aprendido a utilizar `useEffect` para ejecutar código cuando un componente se monta, en este caso para realizar una carga inicial. También he entendido la diferencia entre llamar a `cargarMensaje()` desde un botón, por una acción del usuario, y hacerlo desde `useEffect`, automáticamente al aparecer la pantalla. Además, he visto cómo `useEffect` se integra en el recorrido completo **React Native → fetch → NestJS → respuesta → estado → interfaz**.

# Qué he modificado 
He he utilizado `useEffect` para que la función `cargarMensaje()` se ejecute automáticamente al cargar la pantalla. También he mantenido el botón **Recargar** para poder volver a realizar la petición manualmente.

# Resultado
Al abrir la pantalla aparece inicialmente **“Cargando…”** y `useEffect` realiza automáticamente la petición `GET /mensaje`. Cuando llega la respuesta de NestJS, el estado se actualiza y se muestra **🟢 Backend disponible** junto con el mensaje recibido. El botón **Recargar** permite repetir la petición.
