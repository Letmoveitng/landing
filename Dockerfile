# Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Make sure the app listens on the correct port
ENV PORT=2225

EXPOSE 2225
CMD ["node", "server.js"]

# Node-based healthcheck — checks the correct port
HEALTHCHECK --interval=5s --timeout=5s --retries=10 \
  CMD node -e "require('http').get('http://0.0.0.0:' + (process.env.LETMOVEIT_PORT || 2225), r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"
