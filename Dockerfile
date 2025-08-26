FROM node:20-alpine

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
RUN npm ci

# Копируем все файлы проекта
COPY . .

# Настройки Next.js
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV PORT 3002

# Специально назначаем полные права для директории public
RUN chmod -R 755 ./public

# Собираем приложение
RUN npm run build

# Открываем порт
EXPOSE 3002

# Запускаем приложение
CMD ["npm", "start"]
