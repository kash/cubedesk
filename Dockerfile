FROM node:24-slim AS builder

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        openssl \
        zip \
        awscli \
        ca-certificates && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ARG ENV
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_DEFAULT_REGION
ARG RELEASE_NAME
ARG RESOURCES_BASE_URI
ARG DEPLOYMENT_ID
ARG SENTRY_AUTH_TOKEN

ENV ENV=$ENV
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
ENV AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION
ENV RESOURCES_BASE_URI=$RESOURCES_BASE_URI
ENV RELEASE_NAME=$RELEASE_NAME
ENV DEPLOYMENT_ID=$DEPLOYMENT_ID
ENV DEPLOYING=true

ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ENV SENTRY_ORG=cubedesk
ENV SENTRY_ENVIRONMENT=$ENV

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN rm -rf build && \
    mkdir build && \
    npx prisma generate && \
    pnpm run deploy

RUN find ./dist -name "*.map" -type f -delete && \
    find ./build -name "*.map" -type f -delete

RUN aws s3 sync dist s3://cubedesk/dist --delete --cache-control max-age=604800  && \
    aws s3 sync public s3://cubedesk/static --cache-control max-age=604800

RUN pnpm prune --prod

RUN cp -r ./server/resources/mjml_templates ./build/server/resources/mjml_templates
RUN cp ./server/resources/not_found.html ./build/server/resources/not_found.html

RUN rm -rf ./client ./server ./shared ./test ./dist ./public ./generated ./types && \
    mv ./build/server ./server && \
    mv ./build/client ./client && \
    mv ./build/shared ./shared && \
    mv ./build/generated ./generated && \
    mv ./build/types ./types

FROM node:24-slim

ENV NODE_ENV=production
RUN apt-get update && \
    apt-get install -y openssl

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000
ENTRYPOINT ["node", "-r", "tsconfig-paths/register", "server/app.js"]
