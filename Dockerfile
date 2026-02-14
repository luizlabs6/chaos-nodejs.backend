FROM cgr.dev/chainguard/node

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "node", "sre/index.js" ]