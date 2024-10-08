## Manual del Módulo `fs` en Node.js

### Introducción

El módulo `fs` en Node.js es esencial para interactuar con el sistema de archivos. Nos permite leer, escribir, crear, eliminar y realizar diversas operaciones sobre archivos y directorios.

### Instalación

El módulo `fs` viene integrado en Node.js, por lo que no es necesario instalarlo por separado.

### Operaciones Básicas

#### Lectura de Archivos

* **`fs.readFile(path, options, callback)`:** Lee un archivo de forma asíncrona.

```javascript
const fs = require('fs');

fs.readFile('miArchivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
```

* **`fs.readFileSync(path, options)`:** Lee un archivo de forma síncrona.

```javascript
const fs = require('fs');

const data = fs.readFileSync('miArchivo.txt', 'utf8');
console.log(data);
```

#### Escritura de Archivos

* **`fs.writeFile(path, data, options, callback)`:** Escribe datos en un archivo de forma asíncrona.

```javascript
const fs = require('fs');

fs.writeFile('nuevoArchivo.txt', 'Hola, mundo!', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Archivo creado correctamente.');
    }
});
```

* **`fs.writeFileSync(path, data, options)`:** Escribe datos en un archivo de forma síncrona.

#### Creación y Eliminación de Archivos

* **`fs.mkdir(path, options, callback)`:** Crea un directorio.
* **`fs.rmdir(path, options, callback)`:** Elimina un directorio vacío.
* **`fs.unlink(path, callback)`:** Elimina un archivo.

#### Otras Operaciones

* **`fs.access(path, mode, callback)`:** Verifica si un archivo o directorio existe y si se puede acceder con los permisos especificados.
* **`fs.stat(path, callback)`:** Obtiene información detallada sobre un archivo o directorio.
* **`fs.rename(oldPath, newPath, callback)`:** Renombra un archivo o directorio.
* **`fs.copyFile(src, dest, flags, callback)`:** Copia un archivo.

### Ejemplos y Ejercicios

**1. Leer un archivo JSON y mostrar su contenido:**

```javascript
const fs = require('fs');

fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const datos = JSON.parse(data);
        console.log(datos);
    }
});
```

**2. Crear un nuevo archivo y escribir una línea cada segundo:**

```javascript
const fs = require('fs');

function escribirLinea() {
    const fecha = new Date().toISOString();
    fs.appendFile('log.txt', `${fecha}\n`, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

setInterval(escribirLinea, 1000);
```

**3. Copiar un directorio recursivamente:**

```javascript
// Este ejemplo requiere una biblioteca adicional como `fs-extra`
const fs = require('fs-extra');

fs.copy('origen', 'destino', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directorio copiado correctamente.');
    }
});
```

**4. Buscar todos los archivos con una extensión específica en un directorio:**

```javascript
const fs = require('fs');

function buscarArchivos(directorio, extension) {
    fs.readdir(directorio, (err, archivos) => {
        if (err) {
            console.error(err);
        } else {
            archivos.forEach(archivo => {
                const rutaCompleta = `${directorio}/${archivo}`;
                fs.stat(rutaCompleta, (err, stats) => {
                    if (err) {
                        console.error(err);
                    } else if (stats.isFile() && archivo.endsWith(extension)) {
                        console.log(rutaCompleta);
                    }
                });
            });
        }
    });
}

buscarArchivos('miDirectorio', '.txt');
```

### Consideraciones Importantes

* **Asincronía:** Siempre que sea posible, utiliza las versiones asíncronas de las funciones para evitar bloquear el hilo principal.
* **Manejo de errores:** Siempre verifica si se produjeron errores en las operaciones de E/S.
* **Rendimiento:** Para operaciones intensivas en E/S, considera utilizar `streams` para un mejor rendimiento.
* **Seguridad:** Al trabajar con archivos, ten cuidado con los permisos y evita crear vulnerabilidades.

### Conclusión

El módulo `fs` es una herramienta fundamental para cualquier desarrollador de Node.js. Conocer sus funcionalidades y aplicarlas correctamente te permitirá crear aplicaciones robustas y eficientes que interactúen con el sistema de archivos de manera segura y confiable.

**¿Quieres profundizar en algún tema específico o tienes alguna otra pregunta?**

**Temas que podríamos explorar a continuación:**

* **Streams:** Lectura y escritura de archivos de forma más eficiente.
* **Promesas:** Utilizando `fs/promises` para una mejor gestión de la asincronía.
* **Sistemas de archivos distribuidos:** Interactuando con sistemas de archivos en la nube.
* **Seguridad:** Protegiendo tus aplicaciones de ataques relacionados con el sistema de archivos.

¡Absolutamente! Aquí tienes algunos ejemplos más avanzados y prácticos del módulo `fs` de Node.js, junto con explicaciones detalladas:

### Escenarios Reales con `fs`

#### 1. **Crear un servidor web básico que sirva archivos estáticos**

```javascript
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
```
* **Explicación:** 
  - `express.static`: Configura un middleware para servir archivos estáticos desde un directorio específico.
  - `path.join`: Combina rutas de manera segura para evitar problemas de plataforma.
  - Este ejemplo es la base de muchos servidores web simples, como aquellos que sirven páginas HTML, CSS y JavaScript para aplicaciones web.

#### 2. **Crear una aplicación de línea de comandos para gestionar archivos**

```javascript
const fs = require('fs');
const commander = require('commander');

const program = new commander.Command();

program
  .command('crear <nombreArchivo>')
  .description('Crea un nuevo archivo')
  .action((nombreArchivo) => {
    fs.writeFile(nombreArchivo, '', (err) => {
      if (err) throw err;
      console.log(`Archivo ${nombreArchivo} creado`);
    });
  });

program.parse(process.argv);
```
* **Explicación:**
  - `commander.js`: Una biblioteca popular para crear interfaces de línea de comandos.
  - Este ejemplo demuestra cómo crear una aplicación de línea de comandos simple para crear archivos. Puedes agregar más comandos para eliminar, renombrar, etc.

#### 3. **Crear un sistema de registro (logging) personalizado**

```javascript
const fs = require('fs');

function log(mensaje) {
  const fecha = new Date().toISOString();
  fs.appendFile('log.txt', `${fecha}: ${mensaje}\n`, (err) => {
    if (err) throw err;
  });
}

// Ejemplo de uso
log('Inicio de la aplicación');
// ...
log('Error al procesar datos');
```
* **Explicación:**
  - Registra mensajes en un archivo de texto con una marca de tiempo.
  - Útil para depurar aplicaciones y monitorear su comportamiento.

#### 4. **Crear una copia de seguridad de una carpeta**

```javascript
const fs = require('fs-extra');

fs.copy('carpetaOrigen', 'carpetaDestino', { recursive: true }, (err) => {
  if (err) return console.error(err);
  console.log('Copia realizada correctamente');
});
```
* **Explicación:**
  - `fs-extra`: Una biblioteca que extiende las funcionalidades de `fs`, incluyendo la copia recursiva de directorios.
  - Ideal para realizar copias de seguridad o migrar datos.

#### 5. **Crear un sistema de archivos temporal**

```javascript
const os = require('os');
const fs = require('fs');

const tempDir = os.tmpdir();
const tempFile = fs.mkdtempSync(path.join(tempDir, 'myapp-'));

// ... utilizar el directorio temporal tempFile ...

// Limpiar el directorio temporal al finalizar
fs.rmdirSync(tempFile, { recursive: true });
```
* **Explicación:**
  - `os.tmpdir()`: Obtiene el directorio temporal del sistema.
  - `fs.mkdtempSync()`: Crea un directorio temporal único.
  - Útil para almacenar archivos temporales durante la ejecución de una aplicación.

### Consideraciones Adicionales

* **Asincronía:** Siempre que sea posible, utiliza las versiones asíncronas de las funciones para evitar bloquear el hilo principal.
* **Manejo de errores:** Implementa un manejo de errores robusto para evitar que la aplicación se caiga.
* **Seguridad:** Verifica los permisos de los archivos y directorios para evitar accesos no autorizados.
* **Rendimiento:** Para operaciones intensivas en E/S, considera utilizar `streams` o bibliotecas como `fs-extra` para optimizar el rendimiento.
* **Limpieza:** Elimina los archivos temporales cuando ya no sean necesarios.

**¿Te gustaría explorar algún ejemplo en particular con más detalle?**

**Posibles temas para profundizar:**

* **Streams:** Lectura y escritura de grandes archivos de forma eficiente.
* **Promesas:** Utilizando `fs/promises` para una mejor gestión de la asincronía.
* **Sistemas de archivos distribuidos:** Interactuando con sistemas de archivos en la nube.
* **Seguridad:** Protegiendo tus aplicaciones de ataques relacionados con el sistema de archivos.

¡No dudes en preguntar!
 