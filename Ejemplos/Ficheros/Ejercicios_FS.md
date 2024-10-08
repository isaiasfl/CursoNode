Aquí tienes 10 ejercicios sobre el módulo `fs` de Node.js para practicar, con sus respectivas soluciones explicadas en detalle. Todos los ejemplos están escritos utilizando ES14 o superior.

---

### Ejercicio 1: Crear un archivo
**Instrucciones**: Usa el módulo `fs` para crear un archivo llamado `archivo1.txt` y escribir el texto "Hola, este es el archivo 1".

**Solución**:

```javascript
const fs = require('fs');

// Crear un archivo y escribir texto en él
fs.writeFile('archivo1.txt', 'Hola, este es el archivo 1', (err) => {
  if (err) throw err;
  console.log('Archivo creado y texto escrito.');
});
```

**Explicación**:
- `fs.writeFile()` crea un archivo o lo sobrescribe si ya existe.
- El segundo argumento es el contenido a escribir, y el tercero es una función de callback que maneja el error (si lo hay).

---

### Ejercicio 2: Leer un archivo
**Instrucciones**: Lee el contenido del archivo `archivo1.txt` y muéstralo en la consola.

**Solución**:

```javascript
const fs = require('fs');

// Leer el contenido del archivo
fs.readFile('archivo1.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenido del archivo:', data);
});
```

**Explicación**:
- `fs.readFile()` lee el archivo especificado.
- El segundo argumento, `'utf8'`, asegura que se lee el archivo como texto.
- El callback maneja el contenido leído o el error si ocurre.

---

### Ejercicio 3: Renombrar un archivo
**Instrucciones**: Renombra `archivo1.txt` a `archivo2.txt`.

**Solución**:

```javascript
const fs = require('fs');

// Renombrar el archivo
fs.rename('archivo1.txt', 'archivo2.txt', (err) => {
  if (err) throw err;
  console.log('Archivo renombrado a archivo2.txt');
});
```

**Explicación**:
- `fs.rename()` cambia el nombre del archivo.
- Si el archivo original no existe, se lanza un error.

---

### Ejercicio 4: Eliminar un archivo
**Instrucciones**: Elimina el archivo `archivo2.txt`.

**Solución**:

```javascript
const fs = require('fs');

// Eliminar el archivo
fs.unlink('archivo2.txt', (err) => {
  if (err) throw err;
  console.log('Archivo eliminado');
});
```

**Explicación**:
- `fs.unlink()` elimina el archivo.
- El callback solo se ejecuta si el archivo fue eliminado correctamente o si hubo un error.

---

### Ejercicio 5: Crear una carpeta
**Instrucciones**: Crea una carpeta llamada `miCarpeta`.

**Solución**:

```javascript
const fs = require('fs');

// Crear una carpeta
fs.mkdir('miCarpeta', (err) => {
  if (err) throw err;
  console.log('Carpeta creada.');
});
```

**Explicación**:
- `fs.mkdir()` crea una carpeta en la ruta especificada.
- Lanza un error si la carpeta ya existe o si la ruta es inválida.

---

### Ejercicio 6: Leer el contenido de una carpeta
**Instrucciones**: Lee y muestra el contenido de la carpeta `miCarpeta`.

**Solución**:

```javascript
const fs = require('fs');

// Leer el contenido de la carpeta
fs.readdir('miCarpeta', (err, files) => {
  if (err) throw err;
  console.log('Contenido de miCarpeta:', files);
});
```

**Explicación**:
- `fs.readdir()` lee el contenido de una carpeta y devuelve una lista de nombres de archivos o carpetas en la misma.

---

### Ejercicio 7: Verificar si un archivo o carpeta existe
**Instrucciones**: Verifica si el archivo `archivo2.txt` existe.

**Solución**:

```javascript
const fs = require('fs');

// Verificar si el archivo existe
fs.access('archivo2.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.log('El archivo no existe');
  } else {
    console.log('El archivo existe');
  }
});
```

**Explicación**:
- `fs.access()` verifica si un archivo o carpeta existe o tiene permisos.
- En este caso, se utiliza `fs.constants.F_OK` para comprobar si existe el archivo.

---

### Ejercicio 8: Copiar un archivo
**Instrucciones**: Copia el archivo `archivo1.txt` a una nueva ubicación llamada `archivo3.txt`.

**Solución**:

```javascript
const fs = require('fs');

// Copiar un archivo
fs.copyFile('archivo1.txt', 'archivo3.txt', (err) => {
  if (err) throw err;
  console.log('Archivo copiado a archivo3.txt');
});
```

**Explicación**:
- `fs.copyFile()` copia el contenido de un archivo a otro. Si el archivo de destino no existe, lo crea.

---

### Ejercicio 9: Añadir contenido a un archivo existente
**Instrucciones**: Añade el texto "Esta es una nueva línea" al archivo `archivo1.txt`.

**Solución**:

```javascript
const fs = require('fs');

// Añadir contenido al archivo
fs.appendFile('archivo1.txt', '\nEsta es una nueva línea', (err) => {
  if (err) throw err;
  console.log('Contenido añadido al archivo1.txt');
});
```

**Explicación**:
- `fs.appendFile()` añade el contenido al final del archivo. Si el archivo no existe, lo crea.

---

### Ejercicio 10: Leer las estadísticas de un archivo
**Instrucciones**: Lee las estadísticas del archivo `archivo1.txt`, como tamaño y fecha de modificación.

**Solución**:

```javascript
const fs = require('fs');

// Leer estadísticas de un archivo
fs.stat('archivo1.txt', (err, stats) => {
  if (err) throw err;
  console.log('Estadísticas del archivo:', stats);
});
```

**Explicación**:
- `fs.stat()` devuelve las estadísticas de un archivo como tamaño, fecha de creación, modificación, etc.
- El objeto `stats` contiene toda esta información, que puede usarse para inspeccionar los detalles del archivo.

---

### Conclusión
Cada ejercicio está diseñado para mostrar diferentes operaciones comunes que puedes realizar con el módulo `fs` en Node.js. Esto te ayudará a manejar archivos y directorios de manera eficiente utilizando las últimas características de ES14.