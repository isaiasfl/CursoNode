// lógica para la configuración de Multer : almacenamiento, eliminación de archivos

import multer from "multer";
import path from "path";
import fs from "fs";

// configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // carpeta donde se guardan los archivos.
    cb(null, path.join(process.cwd(),"uploads"))
  },
  filename: (req, file, cb) => {
    // nombre del archivo
    // cb(null, "el_nombre_que_quiera_dar_al_fichero")
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage });

// función para subir archivo
export const uploadFile = (req, res) => {
  try {
      if(!req.file){
        return res.status(400).send("Por favor suba un archivo");
      }
      // xxxx <-- si llego aquí es que he seleccionado un fichero 
      res.status(200).send("Archivo subido correctamente");
  } catch (error) {
    // res.status(500).json({ message: error.message });
    res.status(500).send("Error al subir el archivo");
  }

 }