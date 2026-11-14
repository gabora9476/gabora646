# Gabora646 · Tarjeta digital + Panel de cursos

## Contenido

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La tarjeta pública (la que compartes). |
| `admin.html` | Panel para agregar, editar, ordenar y ocultar cursos. |
| `bin-inicial.json` | Contenido para crear el bin en jsonbin.io (tus 7 cursos actuales). |
| `assets/` | Logo, iconos, `shared.js` (conexión JSONBin e iconos SVG) y `techtext.js` (efecto del título). |
| `manifest.webmanifest` | Permite "Agregar a pantalla de inicio" en iOS/Android. |

Sube **toda la carpeta** a tu hosting (mantén `assets/` junto a los HTML).

---

## Paso 1 · Crear el bin en JSONBin

Elige **una** de las dos formas:

**A) Automática (recomendada)**
1. Abre `admin.html`.
2. Pega tu Master Key, deja el ID vacío y pulsa **Crear bin automáticamente**.
3. El panel crea el bin ya con tus cursos y te muestra el ID en la pestaña **Datos**.

**B) Manual**
1. Entra a https://jsonbin.io → **Bins → Create Bin**.
2. Pega todo el contenido de `bin-inicial.json`.
3. Ponle un nombre (ej. `gabora646-cursos`) y déjalo como **Public** (la tarjeta lo lee sin clave).
4. **Create** y copia el *Bin ID* (aparece en la URL / en la ficha del bin).

> El bin debe ser **público** para que la tarjeta pueda leerlo. La **Master Key nunca va en `index.html`**: solo se usa en el panel.

## Paso 2 · Conectar la tarjeta

Abre `index.html`, busca (cerca del final) y reemplaza:

```js
var CONFIG = {
  BIN_ID: 'PEGA_AQUI_EL_ID_DEL_BIN',
```

por tu ID, por ejemplo `BIN_ID: '66f1a2b3ad19ca34f8c1d2e3'`.

## Paso 3 · Gestionar cursos

1. Abre `admin.html`, escribe tu Master Key y el ID del bin.
2. **Nuevo curso**: título, precio, **enlace de compra** (el destino del botón *Adquirir*), descripción, etiquetas, icono e insignia opcional.
3. Con los interruptores puedes ocultar un curso sin borrarlo; con las flechas cambias el orden.
4. Pulsa **Guardar cambios** (o `Ctrl+S`). La tarjeta se actualiza al recargarla.

## Imágenes de los cursos

En escritorio y tablet cada curso muestra su imagen en el espacio central de la tarjeta (en móvil se oculta para que todo quepa sin scroll). Si un curso no tiene imagen, o el enlace falla, se muestra un arte neón con el icono del curso.

En el editor de cada curso, campo **Imagen del curso**, tienes dos formas:

- **Pegar un enlace.** En Hotmart: clic derecho sobre la imagen del producto → *Copiar dirección de imagen* y pégala. (La detección automática desde el enlace `go.hotmart.com` no es posible desde un navegador, por eso se pega el enlace de la imagen.)
- **Subir un archivo (imgbb).** Pulsa *Subir imagen* (o arrastra el archivo). La imagen se reduce a ~1000 px y se aloja en imgbb; el enlace se rellena solo.
  1. Crea tu API key gratis en https://api.imgbb.com/
  2. El panel te la pide la primera vez (también puedes guardarla en **Ajustes → Subida de imágenes**).
  3. La key se guarda solo en tu navegador; **no** va en el bin ni en `index.html`.

Consejo: usa imágenes cuadradas o 16:9 de al menos 600 px de lado. Si pegas el enlace de Hotmart con `300x300` se verá más suave que una imagen subida; si quieres máxima nitidez, descarga la imagen y súbela con imgbb.

En **Ajustes** editas el enlace de "Productos Digitales" y las 3 cifras (Estudiantes, Satisfacción, Cursos).
En **Datos** puedes copiar el ID, exportar/importar copia de seguridad y restaurar los cursos originales.

## Formato del bin

```json
{
  "version": 1,
  "ajustes": { "productosUrl": "https://…", "stats": [ { "valor": 5000, "sufijo": "+", "etiqueta": "Estudiantes" } ] },
  "cursos": [
    { "id": "c1", "titulo": "…", "precio": "$47", "icono": "road", "descripcion": "…",
      "etiquetas": ["…"], "url": "https://go.hotmart.com/…", "imagen": "https://…/imagen.webp", "insignia": "", "activo": true }
  ]
}
```

Iconos disponibles: road, trending-up, smile, trophy, wallet, bar-chart, graduation, rocket, coins, book, target, shield, star, lightbulb, users, briefcase, dollar.

## Seguridad

- Tu Master Key permite **leer, editar y borrar** todos tus bins. Si la compartiste en algún chat, considera regenerarla en jsonbin.io → *API Keys*.
- Tu API key de imgbb solo permite subir imágenes a tu cuenta, pero igual guárdala en privado.
- Mejor aún: crea una **Access Key** con permisos solo de Create/Read/Update y úsala en el panel en lugar de la Master Key.
- `admin.html` lleva `noindex`, pero no es secreto por sí mismo: la protección real es tu clave. Si quieres, renómbralo a algo no obvio.

## Notas

- Sin conexión o sin `BIN_ID`, la tarjeta muestra los últimos cursos guardados en el navegador o los 7 originales.
- La tarjeta carga las fuentes Outfit/Inter de Google Fonts; si no cargan usa fuentes del sistema.
