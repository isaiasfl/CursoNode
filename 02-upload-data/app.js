// import necesarios
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express(); // Creamos la instancia de express

// para obtener la ruta del fichero actual
const __filename = fileURLToPath(import.meta.url); // Obtenemos la ruta del fichero
const __dirname = path.dirname(__filename); // Obtenemos el directorio del fichero

// middleware para servir los archivos estáticos HTML, CSS, JS, imágenes, etc.
app.use(express.static(path.join(__dirname, "public"))); // Indicamos que la carpeta public es estática

// asociar la carpeta para la subida de archivos en el endpoint /uploads/files
app.use("/uploads/files", aquí_pongo_la_ruta_de_uploadRoutes); // Indicamos que la carpeta uploads es estática

// configuramos el puerto en el que se ejecutará el servidor
const PORT = 3000; // Si hay un puerto en el entorno lo usamos, si no, usamos el 3000

// iniciamos el servidor

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
