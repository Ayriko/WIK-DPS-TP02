FROM node:slim
RUN apt update
RUN adduser ww && su ww
WORKDIR /app
COPY build/index.js ./app
CMD node app