# Usar una imagen base oficial de Node.js (versión 18 o la que prefieras)
FROM node:18-alpine

# Establecer el directorio de trabajo en /app
RUN mkdir -p /app 
# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de definición de paquetes primero (para aprovechar el caché de Docker)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto que usa tu app (según tu .env es el 3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]