# --- Etapa 1: Construcción (Build) ---
# Usamos una imagen de Node para instalar dependencias y crear el build
FROM node:18-alpine as build

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de dependencias primero (para aprovechar la caché de Docker)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Construimos la aplicación para producción
# NOTA: Si usas Vite, esto crea la carpeta 'dist'. Si usas Create-React-App, crea 'build'.
RUN npm run build

# --- Etapa 2: Servidor de Producción (Nginx) ---
# Usamos Nginx ligero para servir los archivos estáticos
FROM nginx:alpine

# Copiamos los archivos construidos desde la etapa anterior
# IMPORTANTE: Si tu carpeta de salida es 'build' en lugar de 'dist', cambia '/app/dist' por '/app/build' abajo.
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Iniciamos Nginx
CMD ["nginx", "-g", "daemon off;"]
