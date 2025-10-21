# 🧭 Guía para editar el sitio – Proyecto React

## 💡 Qué es este proyecto
Este sitio fue desarrollado con React, una herramienta moderna que hace que la página sea más rápida y fácil de mantener.
Aunque fue hecho con código, podés cambiar textos, imágenes o colores sin tocar programación complicada.

---

## 🖥️ Abrir y ejecutar el proyecto localmente

Para editar y probar cambios en tu computadora antes de subirlos al servidor, necesitás:

Requisitos:
- Node.js (versión 16 o superior recomendada)
  - Descargalo desde: https://nodejs.org
- npm (viene incluido con Node.js)
- Un editor de código como VS Code (opcional, pero recomendado)

Abrir el proyecto:
1. Descargá o cloná el proyecto en tu computadora.
2. Abrí la carpeta del proyecto en tu editor de código.
3. Abrí una terminal dentro de esa carpeta.

Instalar dependencias:
en la consola escribi-
npm install

Ejecutar el proyecto:
en la consola escribi-
npm start
- Esto abrirá el proyecto en http://localhost:xxxxx/ (el puerto puede variar pero en la consola dira que direccion es)
- Cada vez que guardes cambios, la página se actualizará automáticamente.

Crear la versión para subir al servidor:
en la consola escribi-
npm run build
- Esto crea la carpeta build/ con todos los archivos listos para producción.

---

## ✏️ Cambiar textos (palabras, títulos o descripciones)

1. Abrí la carpeta del proyecto en tu computadora.
2. Entrá en: src/components
3. Vas a ver varias carpetas con nombres fáciles de entender:
- Hero → la parte de arriba (presentación)
- Nosotros → una breve presentación de la empresa
- Caracteristicas → carrusel
- Beneficios → las tarjetas naranjas
- CasoDeExito → los porcentajes y sus textos
- Ventajas → las tarjetas blancas
- Contacto → información de contacto
- Footer → pie de página con links a redes sociales

4. Dentro de cada carpeta hay un archivo .jsx.
Por ejemplo, si querés cambiar el texto:
<p>Todo tu proceso industrial en un Software ERP/MES integral especializado en convertidores, gráficas y empresas de envases.</p>
Cambiá solo el texto dentro de las etiquetas:
<p>Gestión moderna y eficiente</p>
Guardá el archivo.

> ⚠️ No cambies nada que empiece con < o { — solo el texto visible entre comillas o etiquetas.

---

## 🖼️ Cambiar imágenes

1. Entrá a la carpeta: src/assets
2. Reemplazá la imagen que quieras usando el mismo nombre y formato (por ejemplo, banner.jpg o logo.png)
3. Cuando vuelvas a subir el proyecto al servidor, se verá la nueva imagen.

Tip: si querés guardar las viejas, renombralas con _vieja al final (por ejemplo, logo_viejo.png)

---

## 🎨 Cambiar colores del sitio

1. Abrí el archivo: src/index.css
2. Arriba vas a ver algo como esto:
:root {
  --orange: #ef8e3e;
  --blue-background: #1d3673;
  --color-white: #ffffff;
}
3. Cambiá los códigos de color (#xxxxxx) por los nuevos tonos que quieras usar.
4. Guardá los cambios.
Al volver a subir el proyecto al servidor, se verán los nuevos colores.

---

## 🧩 Agregar o cambiar tarjetas (por ejemplo, Funcionalidades u Otras Funciones)

1. Abrí el archivo del componente que quieras editar.
Ejemplo: src/components/OtrasFunciones/OtrasFunciones.jsx

2. Buscá una parte parecida a esta:
const funcionesData = [
  { id: 1, icon: <FaRegLightbulb size={48} />, title: "Gestión de órdenes de trabajo interno" },
  { id: 2, icon: <BsBuildings size={48} />, title: "Registro de planos de impresión" },
];

3. Para agregar una nueva tarjeta, copiá una línea y cambiale el texto:
{ id: 3, icon: <FaClipboardCheck size={48} />, title: "Control de calidad automatizado" },

4. Guardá el archivo.
No hace falta entender el código: solo cambiá o agregá el texto entre comillas "..."

---

## 🚀 Cómo actualizar el sitio en un servidor (FTP / FileZilla)

1. Crear la versión de producción:
npm run build
# Esto crea la carpeta dist/ con todos los archivos listos para producción

2. Abrí FileZilla y conectate a tu servidor

3. Navegá a la carpeta pública (public_html o similar)

4. Opcional: si querés reemplazar completamente el sitio antiguo, eliminá todos los archivos existentes primero

5. Subí todo el contenido de dist/ al servidor (no la carpeta dist, solo su contenido)

6. Esperá unos segundos y el sitio se actualizará

7. ⚠️ Si tu proyecto usa React Router (rutas internas), asegurate de crear un archivo .htaccess en la carpeta pública con este contenido:
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

---

## 🧯 Si algo se rompe

No te preocupes 😊
Antes de asustarte, revisá:

- Que no hayas borrado una comilla " " o una etiqueta <h1> sin querer.
- Que solo hayas cambiado texto, colores o imágenes.
- Si algo no carga, podés restaurar los archivos anteriores desde tu respaldo.

---

## 🤝 Contacto del desarrollador

Si necesitás ayuda con cambios más grandes o agregar nuevas secciones, podés contactar al desarrollador original del proyecto.