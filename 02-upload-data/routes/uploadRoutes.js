// aquí vamos a gestionar todas las rutas que permitan subir archivos
// usando ./controllers/uploadController.js
import { Router } from "express";
import {
  upload,
  uploadFile,
  listFiles,
  deleFile,
} from "../controllers/uploadController.js";


const router = Router();

// ruta para subir archivo

router.post("/",uploadxxxxxx,uploadFile);


// ruta para listar archivo

// router.get("/",listFiles);


// ruta para eliminar archivo
// router.delete("/:filename",deleFile);


export default router;


