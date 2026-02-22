# Сборка
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Раздача статики
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Наш конфиг для SPA и PWA
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]