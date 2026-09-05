#!/usr/bin/env bash
# Publica el sitio de AR Connect Support El Salvador en GitHub.
# Uso:  bash publicar-en-github.sh
set -e
REPO="https://github.com/GAZA16/arconnect-support.git"
cd "$(dirname "$0")"
[ -d .git ] || git init
git add -A
git commit -m "Sitio web AR Connect Support El Salvador" || echo "Sin cambios nuevos que guardar."
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO"
echo
echo "Usuario de GitHub: GAZA16"
echo "Cuando pida la contrasena, pega tu TOKEN de https://github.com/settings/tokens (permiso: repo)"
echo
git push -u origin main
echo
echo "Listo. Activa GitHub Pages en Settings > Pages (rama main, carpeta root)."
echo "Tu sitio: https://gaza16.github.io/arconnect-support/"
