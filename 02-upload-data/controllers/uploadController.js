// controllers/uploadController.js
import fs from "fs";
import multer from "multer";
import path from "path";

// Configuración de Multer: almacenamiento y nombres de archivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Carpeta donde se guardarán los archivos subidos
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    // Guardamos el archivo con un nombre único basado en la fecha y el nombre original
    // cb(null, `${Date.now()}-${file.originalname}`);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Controlador para subir archivo
export const uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No se ha subido ningún archivo");
    }
    res.send(`Archivo subido con éxito: ${req.file.filename}`);
  } catch (error) {
    res.status(500).send("Error al subir archivo");
  }
};

// Controlador para listar los archivos subidos
export const listFiles = (req, res) => {
  const uploadDir = path.join(process.cwd(), "uploads");
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).send("Error al listar archivos");
    }
    res.json(files); // Devolvemos los nombres de los archivos en formato JSON
  });
};

// Controlador para eliminar un archivo
export const deleteFile = (req, res) => {
  const fileName = req.params.fileName; // Nombre del archivo a eliminar
  const filePath = path.join(process.cwd(), "uploads", fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).send(`Error al eliminar archivo: ${fileName}`);
    }
    res.send(`Archivo ${fileName} eliminado con éxito`);
  });
};

export { upload };
