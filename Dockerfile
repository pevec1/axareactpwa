# === Этап 1: Сборка приложения (Builder Stage) ===
FROM node:20-alpine as builder

# Установка рабочей директории
WORKDIR /app

# Копирование файлов зависимостей
# Используем COPY для повышения эффективности кэширования Docker
COPY package.json ./
COPY package-lock.json ./

# Установка зависимостей
RUN npm install --legacy-peer-deps

# Копирование исходного кода и запуск сборки
COPY . .
RUN npm run build


# === Этап 2: Запуск готового приложения (Production Stage) ===
# Использование легковесного образа Nginx для подачи статики
FROM nginx:stable-alpine

# Копирование собранных статических файлов
COPY --from=builder /app/build /usr/share/nginx/html

# Копирование файла конфигурации Nginx (ВАЖНО для PWA/SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открытие порта, который использует Nginx внутри контейнера
EXPOSE 80

# Команда для запуска Nginx
CMD ["nginx", "-g", "daemon off;"]