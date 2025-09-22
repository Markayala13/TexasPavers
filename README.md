# Texas Pool & Pavers Website

## Clean Code Refactoring - Project Structure

Este proyecto ha sido refactorizado siguiendo principios de **Clean Code** para mejorar la mantenibilidad, organización y escalabilidad del código.

### 📁 Estructura de Carpetas

```
/
├── assets/                     # Recursos estáticos organizados
│   ├── images/                # Todas las imágenes del sitio
│   │   ├── gallery/           # Imágenes de proyectos terminados
│   │   ├── logos/             # Logos de la empresa
│   │   ├── services/          # Imágenes de servicios (PNG y WebP)
│   │   └── flags/             # Banderas de países
│   └── videos/                # Videos promocionales
├── config/                    # Archivos de configuración
│   ├── site-config.json       # Configuración general del sitio
│   ├── pages-config.json      # Configuración de páginas
│   ├── sitemap.xml            # Mapa del sitio (copia de desarrollo)
│   └── robots.txt             # Robots.txt (copia de desarrollo)
├── utils/                     # Utilidades de desarrollo
│   └── format-html.js         # Formateador de HTML
├── _next/                     # Archivos compilados de Next.js
├── contact/                   # Página de contacto
├── gallery/                   # Página de galería
├── our-services/              # Página de servicios
├── 404/                       # Página de error 404
├── index.html                 # Página principal
├── sitemap.xml               # Mapa del sitio (público)
├── robots.txt                # Robots.txt (público)
└── favicon.ico               # Icono del sitio
```

### ✅ Mejoras Aplicadas

#### 1. **Organización de Assets**
- **Antes**: Carpetas dispersas (`SERVICES/`, `pic/`, `PIC2/`, `LOGOS/`, etc.)
- **Después**: Estructura organizada en `/assets/` con subcarpetas por tipo

#### 2. **Configuración Centralizada**
- Creado `site-config.json` con información común del negocio
- Creado `pages-config.json` con metadatos de páginas
- Configuraciones reutilizables y mantenibles

#### 3. **SEO Optimizado**
- Sitemap.xml mejorado con comentarios y estructura clara
- Robots.txt documentado y organizado
- URLs de imágenes actualizadas para la nueva estructura

#### 4. **Consistencia en Referencias**
- Todas las referencias de imágenes actualizadas a la nueva estructura
- URLs consistentes en todo el sitio
- Eliminación de referencias localhost

### 🛠️ Tecnologías

- **Framework**: Next.js (exportación estática)
- **Estilo**: Tailwind CSS
- **Arquitectura**: JAMstack (Static Site Generation)

### 📊 Información del Negocio

- **Empresa**: Texas Pool & Pavers
- **Ubicación**: San Antonio, Texas
- **Servicios**: Construcción de piscinas, instalación de adoquines, paisajismo
- **Áreas de servicio**: San Antonio, Stone Oak, Fair Oaks Ranch, Boerne, Helotes

### 🔧 Mantenimiento

#### Agregar nuevas imágenes:
1. Colocar en la carpeta apropiada en `/assets/images/`
2. Usar formato WebP para mejor rendimiento
3. Actualizar referencias en los archivos HTML correspondientes

#### Actualizar configuración:
1. Modificar `config/site-config.json` para cambios globales
2. Modificar `config/pages-config.json` para cambios de páginas específicas
3. Regenerar archivos públicos si es necesario

### 📈 SEO y Performance

- ✅ Schema.org LocalBusiness implementado
- ✅ Open Graph y Twitter Cards configurados
- ✅ Sitemap XML optimizado
- ✅ Robots.txt configurado correctamente
- ✅ Imágenes optimizadas (WebP)
- ✅ URLs semánticas y limpias

---

**Nota**: Este sitio está optimizado para SEO local en Texas y ha sido estructurado siguiendo las mejores prácticas de Clean Code para facilitar el mantenimiento futuro.