FROM node:20.19-slim AS builder

WORKDIR /app

RUN apt-get update && \
    apt-get install -y  \
        openssl \
        zip \
        python3 \
        python3-pip \
        python3-setuptools \
        groff \
        less && \
    pip3 install --upgrade pip && \
    apt-get clean && \
    pip3 --no-cache-dir install --upgrade awscli

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

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN rm -rf build && \
    mkdir build && \
    npx prisma generate && \
    yarn deploy

RUN find ./dist -name "*.map" -type f -delete && \
    find ./build -name "*.map" -type f -delete

RUN aws s3 cp dist s3://cubedesk/dist --recursive --cache-control max-age=604800  && \
    aws s3 sync public s3://cubedesk/static --cache-control max-age=604800

RUN npm prune --production

RUN cp -r ./server/resources/mjml_templates ./build/server/resources/mjml_templates
RUN cp ./server/resources/not_found.html ./build/server/resources/not_found.html

RUN rm -rf ./client ./server ./shared ./test ./dist ./public && \
    mv ./build/server ./server && \
    mv ./build/client ./client && \
    mv ./build/shared ./shared

FROM node:20.19-slim

ENV NODE_ENV=production
RUN apt-get update && \
    apt-get install -y openssl

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000
ENTRYPOINT ["node", "server/app.js"]
