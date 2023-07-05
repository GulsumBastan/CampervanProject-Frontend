# Angular uygulamasını derlemek için Node.js görüntüsünü kullan
FROM node:16 AS build
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak dosyalarını kopyala
COPY . .

# Angular uygulamasını derle
RUN npm run build

# Üretim aşaması
FROM nginx:alpine AS final
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
