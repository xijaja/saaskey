FROM oven/bun:1 AS builder

WORKDIR /app

COPY . .

RUN mv .env.prod .env && bun install --frozen-lockfile && bun run build

FROM oven/bun:1-slim AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV TZ=Asia/Shanghai
ENV PORT=3000
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

CMD ["bun", "server.js"]

# usage
# docker build -t saaskey .
# docker run --rm --name sk -p 3000:3000 saaskey
# docker run -itd --name sk -p 3000:3000 saaskey
