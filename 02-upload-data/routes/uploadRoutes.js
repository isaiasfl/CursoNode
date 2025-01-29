// routes/uploadRoutes.js
import { Router } from "express";
import {
  upload,
  uploadFile,
  listFiles,
  deleteFile,
} from "../controllers/uploadController.js";

const router = Router();

// Ruta para subir archivo
router.post("/", upload.single("file"), uploadFile);

// Ruta para listar los archivos subidos
router.get("/", listFiles);

// Ruta para eliminar un archivo
router.delete("/:fileName", deleteFile);

export default router;
