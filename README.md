# 🧭 Guía para editar el sitio – Proyecto React (Netlify)

## 💡 Qué es este proyecto
Este sitio fue desarrollado con **React**, una herramienta moderna que hace que la página sea más rápida y fácil de mantener.  
Aunque fue hecho con código, **podés cambiar textos, imágenes o colores sin tocar programación complicada**.

---

## ✏️ Cambiar textos (palabras, títulos o descripciones)

1. Abrí la carpeta del proyecto en tu computadora.  
2. Entrá en: src/components
3. Vas a ver varias carpetas con nombres fáciles de entender:
- `Hero` → la parte de arriba (presentación)
- `Caracteristicas` → los puntos destacados
- `Funcionalidades` → las tarjetas naranjas
- `OtrasFunciones` → las funciones adicionales
- `Soluciones` → la parte con engranajes y conexiones
- `Footer` → el pie de página

4. Dentro de cada carpeta hay un archivo `.jsx`.  
Por ejemplo, si querés cambiar el título principal:
- Abrí `Hero.jsx`
- Buscá algo como:
  ```jsx
  <h1>Tu software de gestión inteligente</h1>
  ```
- Cambiá solo el texto dentro de las etiquetas:
  ```jsx
  <h1>Gestión moderna y eficiente</h1>
  ```
- Guardá el archivo.

> ⚠️ No cambies nada que empiece con `<` o `{` — solo el texto visible entre comillas o etiquetas.

---

## 🖼️ Cambiar imágenes

1. Entrá a la carpeta: src/assets
2. Ahí están las imágenes que usa el sitio.  
3. Reemplazá la imagen que quieras **usando el mismo nombre y formato** (por ejemplo, `banner.jpg` o `logo.png`).  
4. Cuando vuelvas a publicar el sitio, Netlify mostrará la nueva imagen automáticamente.

💡 *Tip:* si querés guardar las viejas, renombralas con `_vieja` al final (por ejemplo, `logo_viejo.png`).

---

## 🎨 Cambiar colores del sitio

1. Abrí el archivo: src/index.css
2. Arriba vas a ver algo como esto:
```css
:root {
  --orange: #ef8e3e;
  --blue-background: #1d3673;
  --color-white: #ffffff;
}
3. Cambiá los códigos de color (#xxxxxx) por los nuevos tonos que quieras usar.
4. Guardá los cambios.
Al volver a subir el proyecto a Netlify, se verán los nuevos colores.

---

🧩 Agregar o cambiar tarjetas (por ejemplo, Funcionalidades u Otras Funciones)

1. Abrí el archivo del componente que quieras editar.
Ejemplo: src/components/OtrasFunciones/OtrasFunciones.jsx

2. Buscá una parte parecida a esta:
const funcionesData = [
  { id: 1, icon: <FaRegLightbulb size={48} />, title: "Gestión de órdenes de trabajo interno" },
  { id: 2, icon: <BsBuildings size={48} />, title: "Registro de planos de impresión" },
];
3.Si querés agregar una nueva tarjeta, copiá una línea y cambiale el texto:
    { id: 3, icon: <FaClipboardCheck size={48} />, title: "Control de calidad automatizado" },
4. Guardá el archivo.
No hace falta entender el código: solo cambiá o agregá el texto entre comillas "...".

---

🚀 Cómo actualizar el sitio en Netlify
🔹 Opción 1 – Si usan GitHub

Cada vez que alguien guarda y sube los cambios al repositorio (push), Netlify los detecta y actualiza el sitio automáticamente.

🔹 Opción 2 – Si suben los archivos manualmente

Abrí una terminal en la carpeta del proyecto.

Escribí:

npm run build


Esto crea una carpeta nueva llamada:

build/


En Netlify:

Entrá a tu cuenta.

En el panel de tu sitio, andá a Deploys → Deploy manualmente.

Arrastrá la carpeta build/ dentro.

Esperá unos segundos y el sitio quedará actualizado.

---

🧯 Si algo se rompe

No te preocupes 😊
Antes de asustarte, revisá:

Que no hayas borrado una comilla " o una etiqueta <h1> sin querer.

Que solo hayas cambiado texto o colores.

Si algo no carga, podés volver a una versión anterior en Netlify → Deploys (cada actualización queda guardada).

---

🤝 Contacto del desarrollador

Si necesitás ayuda con cambios más grandes o agregar nuevas secciones, podés contactar al desarrollador original del proyecto.