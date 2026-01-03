# Especificaciones del Proyecto: Landing Page Dagpacket Bethel

## 1. Stack Tecnológico (Requerido)
* **Framework:** React (Vite o Next.js)
* **Lenguaje:** TypeScript (`.tsx`)
* **Estilos:** Tailwind CSS (Uso exclusivo de clases utilitarias)
* **Iconos:** `lucide-react` (para envíos, camiones, contacto)

## 2. Identidad Visual
* **Marca:** Dagpacket Bethel
* **Paleta de Colores (Tailwind):**
    * Principal: `bg-blue-900` (Azul corporativo oscuro para headers/textos)
    * Acción (CTA): `bg-orange-500` hover: `bg-orange-600` (Naranja vibrante para botones)
    * Fondo: `bg-slate-50` (Gris muy claro para separar secciones)

## 3. Estructura de la Página (Componentes)

### A. Hero Section (Inicio)
* **Diseño:** Fondo limpio o degradado sutil.
* **Texto:**
    * H1: "Simplifica tus envíos en un solo lugar"
    * Subtítulo: "Cotiza, compara y envía con las mejores paqueterías (FedEx, DHL, Estafeta) ahorrando hasta un 35%."
* **CTA Principal:** Botón "Cotizar Ahora" (Debe hacer scroll suave al Formulario).

### B. Sección de Servicios
* **Layout:** Grid de 3 tarjetas (Cards) con sombra (`shadow-lg`).
* **Contenido:**
    1.  **Envíos Nacionales:** Cobertura en todo México.
    2.  **Envíos Internacionales:** Exportación e importación fácil.
    3.  **Rastreo Inteligente:** Monitoreo en tiempo real.

### C. Formulario de Captación (CRÍTICO)
* **Ubicación:** Parte final de la página.
* **Campos (Inputs tipados en TS):**
    * Nombre Completo (string)
    * Teléfono/WhatsApp (string)
    * Correo Electrónico (email)
    * Tipo de Envío (Select: "Nacional" | "Internacional")
* **Estado:** Manejar estados de carga (`isLoading`) y éxito/error (`status`).

## 4. Lógica de Negocio (Webhook)
El formulario debe ejecutar una función `handleSubmit` que envíe los datos capturados a n8n.

* **Endpoint:** `https://n8n.enviox.mx/webhook-test/a340271a-ad8d-42de-a525-8d2780930c10`
* **Método:** `POST`
* **Header:** `'Content-Type': 'application/json'`
* **Acción:**
    1.  Al enviar, mostrar "Enviando...".
    2.  Si la respuesta es 200/OK, mostrar: "¡Gracias! Un asesor te contactará pronto."
    3.  Limpiar el formulario.

## 5. Instrucciones para el Agente de IA
"Actúa como un Desarrollador Senior Frontend. Genera el código completo en un solo archivo (o estructura de componentes clara) usando React y Tailwind. Asegúrate de que el formulario sea funcional y conecte con el webhook especificado arriba."