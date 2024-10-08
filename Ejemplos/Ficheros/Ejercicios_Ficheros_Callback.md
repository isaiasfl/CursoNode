¡Absolutamente! Aquí tienes los 10 ejercicios resueltos utilizando callbacks, presentados de forma individual con una explicación detallada:

**Ejercicio 1: Leer un archivo JSON y mostrar por consola el valor de una propiedad específica**

```javascript
const fs = require("fs");

function leerPropiedadJson(rutaArchivo, propiedad) {
  fs.readFile(rutaArchivo, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
    } else {
      try {
        const jsonData = JSON.parse(data);
        console.log(jsonData[propiedad]);
      } catch (error) {
        console.error("Error al parsear el JSON:", error);
      }
    }
  });
}

leerPropiedadJson("datos.json", "nombre");
```

**Explicación:**

- **`fs.readFile`:** Lee el archivo JSON de forma asíncrona.
- **Callback:** El callback se ejecuta una vez que la lectura del archivo ha terminado.
- **Parsear JSON:** Se intenta parsear el contenido del archivo como un objeto JSON.
- **Acceder a la propiedad:** Si el parseo es exitoso, se accede a la propiedad especificada y se imprime en la consola.

**Ejercicio 2: Crear un directorio y un archivo dentro de él**

```javascript
const fs = require("fs");

function crearDirectorioYArchivo(rutaDirectorio, nombreArchivo) {
  fs.mkdir(rutaDirectorio, { recursive: true }, (err) => {
    if (err) {
      console.error("Error al crear el directorio:", err);
      return;
    }
    fs.writeFile(
      `${rutaDirectorio}/${nombreArchivo}`,
      "Contenido del archivo",
      (err) => {
        if (err) {
          console.error("Error al crear el archivo:", err);
        } else {
          console.log("Directorio y archivo creados correctamente");
        }
      }
    );
  });
}

crearDirectorioYArchivo("nuevaCarpeta", "miArchivo.txt");
```

**Explicación:**

- **`fs.mkdir`:** Crea el directorio especificado. La opción `recursive: true` permite crear directorios anidados si no existen.
- **`fs.writeFile`:** Crea el archivo dentro del directorio recién creado.

**Ejercicio 3: Copiar un archivo a otra ubicación**

```javascript
const fs = require("fs");

function copiarArchivo(rutaOrigen, rutaDestino) {
  fs.copyFile(rutaOrigen, rutaDestino, (err) => {
    if (err) {
      console.error("Error al copiar el archivo:", err);
    } else {
      console.log("Archivo copiado correctamente");
    }
  });
}

copiarArchivo("archivoOrigen.txt", "nuevaCarpeta/archivoCopia.txt");
```

**Ejercicio 4: Renombrar un archivo**

```javascript
const fs = require("fs");

function renombrarArchivo(rutaActual, nuevaRuta) {
  fs.rename(rutaActual, nuevaRuta, (err) => {
    if (err) {
      console.error("Error al renombrar el archivo:", err);
    } else {
      console.log("Archivo renombrado correctamente");
    }
  });
}

renombrarArchivo("miArchivo.txt", "nuevoNombre.txt");
```

¡Claro! Continuemos con los ejercicios del 5 al 10, utilizando callbacks para manejar las operaciones asíncronas del módulo `fs` de Node.js.

**Ejercicio 5: Eliminar un directorio y todo su contenido**

```javascript
const fs = require("fs");

function eliminarDirectorio(rutaDirectorio) {
  fs.rm(rutaDirectorio, { recursive: true }, (err) => {
    if (err) {
      console.error("Error al eliminar el directorio:", err);
    } else {
      console.log("Directorio y contenido eliminados correctamente");
    }
  });
}

eliminarDirectorio("nuevaCarpeta");
```

**Explicación:**

- **`fs.rm`:** Elimina el directorio especificado y todo su contenido de forma recursiva.
- **`recursive: true`:** Indica que se deben eliminar todos los subdirectorios y archivos dentro del directorio.

**Ejercicio 6: Verificar si un archivo existe**

```javascript
const fs = require("fs");

function verificarExistencia(rutaArchivo) {
  fs.access(rutaArchivo, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("El archivo no existe");
    } else {
      console.log("El archivo existe");
    }
  });
}

verificarExistencia("miArchivo.txt");
```

**Explicación:**

- **`fs.access`:** Verifica si se puede acceder al archivo.
- **`fs.constants.F_OK`:** Indica que solo se verificará la existencia del archivo.

**Ejercicio 7: Leer un archivo línea por línea**

```javascript
const fs = require("fs");
const readline = require("readline");

function leerArchivoPorLineas(rutaArchivo) {
  const rl = readline.createInterface({
    input: fs.createReadStream(rutaArchivo),
  });

  rl.on("line", (line) => {
    console.log(line);
  });
}

leerArchivoPorLineas("miArchivo.txt");
```

**Explicación:**

- **`readline`:** Módulo para leer archivos línea por línea.
- **`createInterface`:** Crea una interfaz para leer el archivo.
- **`on('line')`:** Escucha el evento 'line' y imprime cada línea en la consola.

**Ejercicio 8: Escribir en un archivo, agregando contenido al final**

```javascript
const fs = require("fs");

function agregarContenido(rutaArchivo, nuevoContenido) {
  fs.appendFile(rutaArchivo, nuevoContenido, (err) => {
    if (err) {
      console.error("Error al agregar contenido al archivo:", err);
    } else {
      console.log("Contenido agregado al archivo");
    }
  });
}

agregarContenido("miArchivo.txt", "\nEsto es una nueva línea");
```

**Explicación:**

- **`fs.appendFile`:** Agrega contenido al final de un archivo.

**Ejercicio 9: Crear un archivo temporal**

```javascript
const fs = require("fs");
const os = require("os");

function crearArchivoTemporal() {
  const tempDir = os.tmpdir();
  const tempFile = `${tempDir}/tempFile.txt`;
  fs.writeFile(tempFile, "Contenido temporal", (err) => {
    if (err) {
      console.error("Error al crear el archivo temporal:", err);
    } else {
      console.log("Archivo temporal creado:", tempFile);
    }
  });
}

crearArchivoTemporal();
```

**Explicación:**

- **`os.tmpdir()`:** Obtiene la ruta del directorio temporal del sistema.
- **`fs.writeFile`:** Crea el archivo temporal en el directorio temporal.

**Ejercicio 10: Copiar un directorio recursivamente**

```javascript
const fs = require("fs");

function copiarDirectorioRecursivo(origen, destino) {
  fs.cp(origen, destino, { recursive: true }, (err) => {
    if (err) {
      console.error("Error al copiar el directorio:", err);
    } else {
      console.log("Directorio copiado recursivamente");
    }
  });
}

copiarDirectorioRecursivo("directorioOrigen", "directorioDestino");
```

**Explicación:**

- **`fs.cp`:** Copia un directorio y todo su contenido de forma recursiva.
- **`recursive: true`:** Indica que se deben copiar todos los subdirectorios y archivos.

**Recuerda:** Estos ejemplos utilizan callbacks para manejar la asincronía. Aunque son funcionales, el anidamiento de callbacks puede llevar al "callback hell". Considera utilizar promesas o async/await para una mejor legibilidad y manejo de errores en proyectos más grandes.
