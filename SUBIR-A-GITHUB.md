# Subir el sitio a https://github.com/GAZA16/arconnect-support

El repositorio ya viene preparado: la carpeta incluye el historial de Git, la rama `main`
y el enlace remoto apuntando a tu repositorio. Solo falta el envio final, que requiere
tu usuario y token de GitHub.

## Opcion 1 — Sin consola (la mas facil, 3 minutos)

1. Entra a <https://github.com/GAZA16/arconnect-support>. Si el repositorio no existe aun,
   crealo con ese nombre exacto y marcalo como **Public**.
2. Presiona **Add file → Upload files**.
3. Arrastra estos archivos (no la carpeta, los archivos de adentro):
   `index.html`, `styles.css`, `app.js`, `robots.txt`, `sitemap.xml`, `README.md`, `.nojekyll`
4. Escribe un mensaje y presiona **Commit changes**.
5. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**,
   rama `main`, carpeta `/ (root)` y guarda.
6. En 1 o 2 minutos tu sitio estara en linea:
   **https://gaza16.github.io/arconnect-support/**

> Nota: el archivo `.nojekyll` esta oculto en Windows. Activa
> "Elementos ocultos" en la pestana *Vista* del explorador para poder arrastrarlo.

## Opcion 2 — Con consola (Git instalado en tu PC)

Abre una terminal dentro de la carpeta del sitio y ejecuta:

```bash
git init
git add .
git commit -m "Sitio web AR Connect Support El Salvador"
git branch -M main
git remote add origin https://github.com/GAZA16/arconnect-support.git
git push -u origin main
```

Cuando pida contrasena, **no uses la de tu cuenta**: GitHub exige un token.
Generalo en <https://github.com/settings/tokens> → *Generate new token (classic)* →
marca el permiso **repo** → copia el token y pegalo como contrasena.

Si el repositorio ya tenia contenido y Git rechaza el envio, usa:

```bash
git pull --rebase origin main
git push -u origin main
```

## Despues de publicar

1. Verifica que el boton de WhatsApp abra el chat al **+503 7805-1905**.
2. Registra el sitio en <https://search.google.com/search-console> y envia
   `https://gaza16.github.io/arconnect-support/sitemap.xml`.
3. Crea tu perfil gratuito en <https://business.google.com> con el nombre exacto
   “AR Connect Support El Salvador”, el mismo telefono y el enlace del sitio.
   Esto es lo que hace que aparezcas al buscar tu empresa en Google.

## Si quieres tu propio dominio

Compra por ejemplo `arconnectsupport.com`, agregalo en **Settings → Pages → Custom domain**
y apunta los registros DNS a GitHub Pages. Luego cambia `https://arconnectsupport.com/`
en `sitemap.xml` y en la etiqueta canonical de `index.html` por tu dominio real.
