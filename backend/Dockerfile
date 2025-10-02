# Dockerfile para el Backend Ford
FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto del backend
EXPOSE 3001

# Comando para ejecutar el servidor
CMD ["npm", "start"]

