# Exemplo de Dockerfile
FROM node:14

# Instalar dependências
WORKDIR /app
COPY package*.json ./
RUN npm install

# Baixar o script wait-for-it
RUN curl -sS https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -o /wait-for-it.sh && chmod +x /wait-for-it.sh

# Copiar o restante do código
COPY . .

# Expor a porta
EXPOSE 3000

# Comando de entrada
ENTRYPOINT ["sh", "-c", "/wait-for-it.sh mysql:3306 -t 60 -- npm start"]
