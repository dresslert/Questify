# Use a imagem base do Go
FROM golang:1.16-alpine

# Define o diretório de trabalho
WORKDIR /app

# Instale ferramentas adicionais (opcional)
RUN apk update && apk add --no-cache git

# Exponha a porta padrão para aplicações Go (opcional)
EXPOSE 8080

# Defina o comando padrão para o container
CMD ["tail", "-f", "/dev/null"]
