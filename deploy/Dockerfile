FROM oven/bun:1.2.8-slim as build
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

ARG VERSION=unknown
ARG GIT_SHA=unknown
RUN printf '{ "version": "%s", "sha": "%s" }\n' "$VERSION" "$GIT_SHA" > /app/dist/version

FROM nginx:alpine
RUN apk add --no-cache curl
COPY --from=build /app/dist /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=5s --retries=3 --start-period=5s \
  CMD curl --fail http://localhost/ping || exit 1
