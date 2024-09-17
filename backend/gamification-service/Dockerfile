# Use a imagem base do OpenJDK
FROM openjdk:11-jdk-slim

# Define o diretório de trabalho
WORKDIR /app

# Instale ferramentas adicionais (opcional)
RUN apt-get update && \
    apt-get install -y maven git

# Exponha a porta padrão para aplicações Java (opcional)
EXPOSE 8080

# Defina o comando padrão para o container
CMD ["tail", "-f", "/dev/null"]
