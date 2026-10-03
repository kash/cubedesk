# syntax=docker/dockerfile:1
# The server is built on the CI runner and bundled with all of its dependencies, so the image only
# needs Node and the build output. Runtime config comes from the ECS task definition's env vars.
FROM node:24-slim

# Baked in because they must match the client bundle built in the same deploy
ARG DEPLOYMENT_ID
ARG RELEASE_NAME

ENV NODE_ENV=production
ENV DEPLOYMENT_ID=$DEPLOYMENT_ID
ENV RELEASE_NAME=$RELEASE_NAME

# RDS signs its certificates with Amazon's own CA, which Node doesn't trust by default.
# Lets DATABASE_URL use sslmode=verify-full against RDS.
ADD --chmod=644 --checksum=sha256:733b52e4b589586377e3e00f7c4625b61e14cbf0b5e08cace28b4f8aecc27c66 \
    https://truststore.pki.rds.amazonaws.com/us-west-2/us-west-2-bundle.pem /etc/ssl/certs/rds-us-west-2.pem
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/rds-us-west-2.pem

WORKDIR /app

COPY build/server ./build/server

EXPOSE 3000
ENTRYPOINT ["node", "build/server/app.cjs"]
