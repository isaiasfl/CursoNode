¡Claro! Aquí tienes algunos ejemplos más básicos para trabajar con el módulo `fs` de Node.js sin involucrar promesas, ideales para introducir a los alumnos en la programación asíncrona de una manera más gradual:

### Ejemplos Básicos con Callbacks

#### 1. **Leer un archivo y mostrarlo por consola:**

```javascript
const fs = require('fs');

fs.readFile('miArchivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
    } else {
        console.log(data);
    }
});
```

**Explicación:**
* `fs.readFile`: Lee el archivo de forma asíncrona.
* El segundo argumento, 'utf8', especifica la codificación del archivo.
* El tercer argumento es una función de callback que se ejecuta cuando la operación de lectura finaliza.
* Si hay un error, se imprime un mensaje de error.
* Si la lectura es exitosa, se imprime el contenido del archivo.

#### 2. **Escribir en un archivo:**

```javascript
const fs = require('fs');

const data = 'Esto es un nuevo contenido';

fs.writeFile('nuevoArchivo.txt', data, (err) => {
    if (err) {
        console.error('Error al escribir en el archivo:', err);
    } else {
        console.log('Archivo creado correctamente');
    }
});
```

#### 3. **Crear un directorio:**

```javascript
const fs = require('fs');

fs.mkdir('nuevaCarpeta', (err) => {
    if (err) {
        console.error('Error al crear la carpeta:', err);
    } else {
        console.log('Carpeta creada correctamente');
    }
});
```

#### 4. **Eliminar un archivo:**

```javascript
const fs = require('fs');

fs.unlink('archivoAEliminar.txt', (err) => {
    if (err) {
        console.error('Error al eliminar el archivo:', err);
    } else {
        console.log('Archivo eliminado correctamente');
    }
});
```

#### 5. **Verificar si un archivo existe:**

```javascript
const fs = require('fs');

fs.access('miArchivo.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('El archivo no existe');
    } else {
        console.log('El archivo existe');
    }
});
```

### Ejercicios para los Alumnos

* **Crear un programa que copie el contenido de un archivo a otro.**
* **Crear un programa que renombre un archivo.**
* **Crear un programa que liste todos los archivos en un directorio.**
* **Crear un programa que cree una estructura de directorios anidada.**
* **Crear un programa que busque un archivo específico en una carpeta y sus subcarpetas.**

### Importante: El Callback Hell

Al trabajar con múltiples operaciones asíncronas y anidar callbacks, podemos encontrarnos con el llamado "callback hell". Para evitar esto, es recomendable utilizar promesas o async/await, que veremos en ejemplos más avanzados.

**¿Qué te gustaría que explicara a continuación?**

* **Promesas:** Cómo utilizarlas con `fs` para mejorar la legibilidad del código.
* **Async/await:** Una sintaxis más sencilla para manejar la asincronía.
* **Streams:** Para trabajar con grandes archivos de forma eficiente.
* **Otras operaciones:** Como copiar directorios recursivamente, leer archivos línea por línea, etc.

**Recuerda:** Estos ejemplos básicos son un buen punto de partida para entender cómo funciona el módulo `fs` y cómo manejar la asincronía en Node.js. A medida que los alumnos se sientan más cómodos, puedes introducir conceptos más avanzados.
