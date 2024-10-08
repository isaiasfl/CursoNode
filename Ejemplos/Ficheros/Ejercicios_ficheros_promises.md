¡Absolutamente! Aquí tienes 10 ejercicios para practicar el uso del módulo `fs` de Node.js, pensados para estudiantes de ES14 o superior. Cada ejercicio incluye una descripción clara, la solución y una explicación detallada.

**Ejercicios:**

1. **Leer un archivo JSON y mostrar por consola el valor de una propiedad específica.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');

     async function leerPropiedadJson(rutaArchivo, propiedad) {
       try {
         const data = await fs.readFile(rutaArchivo, 'utf8');
         const jsonData = JSON.parse(data);
         console.log(jsonData[propiedad]);
       } catch (error) {
         console.error('Error al leer el archivo o propiedad no encontrada:', error);
       }
     }

     leerPropiedadJson('datos.json', 'nombre');
     ```
   * **Explicación:** Utilizamos `fs/promises` para una sintaxis más limpia con `async/await`. Leemos el archivo, lo parseamos como JSON y accedemos a la propiedad especificada.

2. **Crear un directorio y un archivo dentro de él.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');

     async function crearDirectorioYArchivo(rutaDirectorio, nombreArchivo) {
       try {
         await fs.mkdir(rutaDirectorio, { recursive: true }); // Crea el directorio y sus padres si no existen
         await fs.writeFile(`${rutaDirectorio}/${nombreArchivo}`, 'Contenido del archivo');
         console.log('Directorio y archivo creados correctamente');
       } catch (error) {
         console.error('Error al crear el directorio o archivo:', error);
       }
     }

     crearDirectorioYArchivo('nuevaCarpeta', 'miArchivo.txt');
     ```

3. **Copiar un archivo a otra ubicación.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');

     async function copiarArchivo(rutaOrigen, rutaDestino) {
       try {
         await fs.copyFile(rutaOrigen, rutaDestino);
         console.log('Archivo copiado correctamente');
       } catch (error) {
         console.error('Error al copiar el archivo:', error);
       }
     }

     copiarArchivo('archivoOrigen.txt', 'nuevaCarpeta/archivoCopia.txt');
     ```

4. **Renombrar un archivo.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');

     async function renombrarArchivo(rutaActual, nuevaRuta) {
       try {
         await fs.rename(rutaActual, nuevaRuta);
         console.log('Archivo renombrado correctamente');
       } catch (error) {
         console.error('Error al renombrar el archivo:', error);
       }
     }

     renombrarArchivo('miArchivo.txt', 'nuevoNombre.txt');
     ```

5. **Eliminar un directorio y todo su contenido.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');

     async function eliminarDirectorio(rutaDirectorio) {
       try {
         await fs.rm(rutaDirectorio, { recursive: true });
         console.log('Directorio y contenido eliminados correctamente');
       } catch (error) {
         console.error('Error al eliminar el directorio:', error);
       }
     }

     eliminarDirectorio('nuevaCarpeta');
     ```

6. **Verificar si un archivo existe.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');

     async function verificarExistencia(rutaArchivo) {
       try {
         await fs.access(rutaArchivo);
         console.log('El archivo existe');
       } catch (error) {
         console.log('El archivo no existe');
       }
     }

     verificarExistencia('miArchivo.txt');
     ```

7. **Leer un archivo línea por línea.**
   * **Solución:**
     ```javascript
     const fs = require('fs');
     const readline = require('readline');

     const rl = readline.createInterface({
       input: fs.createReadStream('miArchivo.txt')
     });

     rl.on('line', (line) => {
       console.log(line);
     });
     ```

8. **Escribir en un archivo, agregando contenido al final.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');

     async function agregarContenido(rutaArchivo, nuevoContenido) {
       try {
         await fs.appendFile(rutaArchivo, nuevoContenido);
         console.log('Contenido agregado al archivo');
       } catch (error) {
         console.error('Error al agregar contenido al archivo:', error);
       }
     }
     ```

9. **Crear un archivo temporal.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');
     const os = require('os');

     async function crearArchivoTemporal() {
       const tempDir = os.tmpdir();
       const tempFile = `${tempDir}/tempFile.txt`;
       await fs.writeFile(tempFile, 'Contenido temporal');
       console.log('Archivo temporal creado:', tempFile);
     }
     ```

10. **Copiar un directorio recursivamente.**
   * **Solución:**
     ```javascript
     const fs = require('fs/promises');

     async function copiarDirectorioRecursivo(origen, destino) {
       try {
         await fs.cp(origen, destino, { recursive: true });
         console.log('Directorio copiado recursivamente');
       } catch (error) {
         console.error('Error al copiar el directorio:', error);
       }
     }
     ```

**Indicaciones:**

* **fs/promises:** Utiliza el módulo `fs/promises` para una sintaxis más moderna y fácil de leer con `async/await`.
* **Manejo de errores:** Siempre utiliza `try...catch` para manejar posibles errores.
* **Opciones:** Explora las diferentes opciones que ofrecen las funciones de `fs` para personalizar tu código.
* **Async/await:** Esta sintaxis hace que el código asíncrono se parezca más al código síncrono, mejorando la legibilidad.
* **Recursive:** Para copiar directorios de forma recursiva, utiliza la opción `recursive: true`.
* **ReadLine:** Para leer archivos línea por línea, utiliza el módulo `readline`.

**Recomendaciones:**
* **Explora otros métodos:** El módulo `fs` ofrece muchas otras funciones útiles, como `stat` para obtener información sobre un archivo, `watch` para monitorear cambios en un archivo, etc.
* **Crea tus propios ejercicios:** Modifica estos ejercicios o crea nuevos para practicar diferentes escenarios.
* **Utiliza herramientas de depuración:** Utiliza el depurador de tu editor de código para entender mejor cómo funciona el código.

¡Diviértete practicando con el módulo `fs`!
