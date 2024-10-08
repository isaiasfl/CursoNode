Sí, es posible crear un servidor FTP básico en Node.js utilizando paquetes como `ftp-srv`, que simplifica la creación de un servidor FTP. A continuación te muestro cómo hacerlo paso a paso.

### Instalación del paquete `ftp-srv`

Primero, necesitas instalar el paquete `ftp-srv`. Abre tu terminal y ejecuta:

```bash
npm init -y  # Inicializa el proyecto Node.js si aún no lo has hecho
npm install ftp-srv
```

### Creación de un servidor FTP básico

A continuación, te muestro un código básico para configurar un servidor FTP usando `ftp-srv`. Este servidor permitirá la conexión de clientes FTP y te mostrará un mensaje cuando un usuario se conecte.

```javascript
const FtpSrv = require("ftp-srv");

// Definimos la URL del servidor FTP (puerto y protocolo)
const ftpServer = new FtpSrv({
  url: "ftp://127.0.0.1:21", // Servidor FTP corriendo en localhost y puerto 21
  anonymous: true, // Permitir acceso anónimo
});

// Escuchar cuando el servidor está listo
ftpServer.on("login", (data, resolve, reject) => {
  console.log("Usuario conectado:", data.username);

  // Configurar el directorio raíz del servidor FTP
  resolve({ root: "./ftp-root" });
});

// Manejar el evento de inicio del servidor
ftpServer.listen().then(() => {
  console.log("Servidor FTP corriendo en ftp://127.0.0.1:21");
});
```

### Descripción del código:

1. **Instanciación de `FtpSrv`**:

   - `FtpSrv` es la clase principal que crea el servidor FTP.
   - En la opción `url`, se define la dirección del servidor (en este caso, `ftp://127.0.0.1:21` para que corra en el puerto 21 de localhost).
   - El campo `anonymous: true` permite conexiones anónimas, es decir, sin necesidad de autenticación.

2. **Evento `login`**:

   - El evento `login` se activa cuando un usuario intenta conectarse al servidor FTP. Recibe los datos de la conexión como `username`, y `resolve` para permitir el acceso.
   - Aquí configuramos el directorio raíz del FTP, en este caso `./ftp-root`.

3. **Iniciar el servidor**:
   - `ftpServer.listen()` inicia el servidor y comienza a escuchar en la dirección especificada. Cuando el servidor está listo, se imprime el mensaje `Servidor FTP corriendo...`.

### Crear el directorio para almacenar archivos

Debes crear un directorio donde se almacenarán los archivos del servidor FTP, en este caso `ftp-root`. En tu terminal, ejecuta:

```bash
mkdir ftp-root
```

### Ejecutar el servidor

Guarda el código en un archivo, por ejemplo `ftp-server.js`, y ejecuta el servidor con:

```bash
node ftp-server.js
```

Una vez ejecutado, el servidor FTP estará escuchando en la dirección `ftp://127.0.0.1:21`.

### Conexión al servidor FTP

Puedes conectarte a este servidor utilizando un cliente FTP como `FileZilla`, o incluso desde la línea de comandos de tu sistema. Si usas Linux o macOS, puedes probar el siguiente comando:

```bash
ftp 127.0.0.1
```

### Extensiones y mejoras

- **Autenticación**: Si quieres agregar usuarios y contraseñas, puedes modificar el evento `login` para validar las credenciales. Aquí un ejemplo:

  ```javascript
  ftpServer.on("login", ({ username, password }, resolve, reject) => {
    if (username === "usuario" && password === "contraseña") {
      resolve({ root: "./ftp-root" });
    } else {
      reject(new Error("Credenciales incorrectas"));
    }
  });
  ```

- **Configuraciones adicionales**: Puedes explorar más opciones como configurar directorios diferentes para cada usuario, establecer permisos, etc., leyendo la [documentación de `ftp-srv`](https://github.com/trs/ftp-srv).

¿Te gustaría agregar alguna funcionalidad específica o hacer alguna otra prueba?
