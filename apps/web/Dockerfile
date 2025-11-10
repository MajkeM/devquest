# Multi-stage build for Vite React app located at repo root
FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
# Use root package.json/package-lock.json
COPY package*.json ./
RUN npm ci || npm i

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
# Copy entire repo as context is repo root
COPY . .
RUN npm run build

FROM nginx:alpine AS runner
# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html
# Provide nginx config to listen on 3001 and SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001
CMD ["nginx","-g","daemon off;"]
