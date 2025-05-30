# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Elimina los archivos por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia tu página web al directorio público de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
