# AR Connect Support El Salvador

Sitio web oficial de **AR Connect Support El Salvador** — soporte técnico remoto para computadoras, mantenimiento, instalación de programas y licencias de Windows y Microsoft Office.

- WhatsApp: +503 7805-1905
- Correo: zepedageovanyalexander@gmail.com
- Cobertura: todo El Salvador, 100% remoto

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Página principal (servicios, licencias, cotizador, contacto) |
| `styles.css` | Diseño y colores |
| `app.js` | Cotizador automático y enlaces de WhatsApp |
| `robots.txt` / `sitemap.xml` | Ayudan a que Google indexe el sitio |
| `.nojekyll` | Necesario para GitHub Pages |

## Publicar gratis con GitHub Pages

1. Crea una cuenta en <https://github.com> y luego un repositorio nuevo llamado `arconnect-support` (marcado como **Public**).
2. En el repositorio presiona **Add file → Upload files**, arrastra TODOS los archivos de esta carpeta y presiona **Commit changes**.
3. Entra a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. Espera 1–2 minutos: tu sitio quedará en `https://TU-USUARIO.github.io/arconnect-support/`.

### Alternativa por consola

```bash
git init
git add .
git commit -m "Sitio web AR Connect Support El Salvador"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/arconnect-support.git
git push -u origin main
```

## Cambiar el número de WhatsApp

Edita las dos primeras variables de `app.js` (`WA_NUMERO` y `WA_VISIBLE`).

## Aparecer en Google

1. Registra el sitio en <https://search.google.com/search-console> y envía `sitemap.xml`.
2. Crea tu perfil gratuito en <https://business.google.com> con el nombre exacto “AR Connect Support El Salvador”, el mismo teléfono y el enlace del sitio.
