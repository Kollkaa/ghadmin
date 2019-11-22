FROM node

RUN apk update && apk upgrade && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm

ARG STRAPI_VERSION
RUN yarn global add strapi@${STRAPI_VERSION}

WORKDIR /srv/app

COPY ./*  /srv/app/

EXPOSE 1337

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["strapi", "develop"]
