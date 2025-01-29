// Obtener referencias
const uploadForm = document.getElementById("uploadForm");
const fileList = document.getElementById("fileList");

// Función para listar los archivos subidos
async function fetchFiles() {
  const response = await fetch("/uploads");
  if (!response.ok) {
    console.error("Error al obtener los archivos");
    return;
  }
  const files = await response.json();
  fileList.innerHTML = ""; // Limpiar la lista antes de renderizar

  // Renderizar los archivos en la lista
  files.forEach((file) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm";
    li.innerHTML = `
      <span>${file}</span>
      <button class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600" data-filename="${file}">Eliminar</button>
    `;
    fileList.appendChild(li);
  });

  // Agregar eventos de eliminación
  document.querySelectorAll("button[data-filename]").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const fileName = e.target.dataset.filename;
      await deleteFile(fileName);
      fetchFiles(); // Actualizar la lista
    });
  });
}

// Función para eliminar archivo
async function deleteFile(fileName) {
  const response = await fetch(`/uploads/${fileName}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    console.error(`Error al eliminar el archivo: ${fileName}`);
  }
}

// Manejador de envío del formulario de subida
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(uploadForm);
  const response = await fetch("/uploads", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    uploadForm.reset(); // Limpiar el formulario
    fetchFiles(); // Actualizar la lista
  } else {
    console.error("Error al subir el archivo");
  }
});

// Cargar la lista de archivos al cargar la página
document.addEventListener("DOMContentLoaded", fetchFiles);
