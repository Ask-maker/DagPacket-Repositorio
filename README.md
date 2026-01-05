# 🚚 DagPacket Bethel - Landing Page

Landing page profesional para **DagPacket Bethel**, franquicia de la plataforma multicarrier de logística y envíos.

## 📋 Descripción del Proyecto

Este sitio web es una landing page diseñada para captar clientes potenciales interesados en servicios de paquetería y logística. Permite a los visitantes conocer los servicios ofrecidos y solicitar cotizaciones personalizadas.

## 🎯 ¿Qué hace este sitio?

| Sección | Descripción | ¿Por qué se agregó? |
|---------|-------------|---------------------|
| **Hero** | Encabezado principal con mensaje de valor | Captar atención inmediata del visitante |
| **Servicios** | Tarjetas con servicios ofrecidos (envíos nacionales, internacionales, rastreo) | Mostrar el valor diferencial de la empresa |
| **Partners** | Logos de paqueterías aliadas (FedEx, DHL, Estafeta, etc.) | Generar confianza mostrando marcas reconocidas |
| **Impacto** | Métricas de entregas, clientes y cobertura | Demostrar experiencia y alcance |
| **Formulario de Contacto** | Captura de datos del cliente con webhook | Generar leads para el equipo comercial |
| **Modo Oscuro/Claro** | Toggle de tema adaptable | Mejorar experiencia de usuario |
| **Páginas Legales** | Política de Privacidad y Términos y Condiciones | Cumplimiento legal |

## 🔧 Funcionalidades Técnicas

### Formulario de Contacto
- Envía datos a webhook de **n8n** para automatización
- Método: `POST` con cuerpo JSON
- Campos: Nombre, Empresa, Email, Teléfono, Necesidades, Presupuesto
- Estados de carga y mensajes de éxito/error

### Tema Adaptable
- Detecta preferencia del sistema
- Persiste selección del usuario
- Transiciones suaves entre temas

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de build rápida
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconografía
- **React Router** - Navegación SPA

## 🚀 Instalación y Desarrollo

```bash
# Clonar repositorio
git clone git@github.com:Ask-maker/DagPacket-Repositorio.git
cd DagPacket-Repositorio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── ContactForm.tsx    # Formulario con integración webhook
│   ├── Hero.tsx           # Sección principal
│   ├── Services.tsx       # Tarjetas de servicios
│   ├── Partners.tsx       # Logos de paqueterías
│   ├── Impact.tsx         # Estadísticas de impacto
│   ├── Footer.tsx         # Pie de página con enlaces
│   └── ThemeToggle.tsx    # Botón de cambio de tema
├── pages/
│   ├── PrivacyPolicy.tsx  # Página de privacidad
│   └── TermsAndConditions.tsx # Términos y condiciones
├── App.tsx                # Componente principal con rutas
└── index.css              # Estilos globales y Tailwind
```

## 🌐 Despliegue en Netlify

1. Conectar repositorio de GitHub a Netlify
2. Configurar build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Netlify desplegará automáticamente con cada push

## 📝 Historial de Cambios

### v1.0 (2026-01-05)
- ✅ Landing page completa con todas las secciones
- ✅ Formulario de contacto con webhook funcional
- ✅ Modo oscuro/claro implementado
- ✅ Páginas de Política de Privacidad y Términos
- ✅ Diseño responsivo para móviles y desktop
- ✅ Favicons personalizados

---

© 2026 DagPacket Bethel. Todos los derechos reservados.
