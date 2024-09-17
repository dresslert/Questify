# Use a imagem base oficial do Rust
FROM rust:latest

# Define o diretório de trabalho
WORKDIR /app

# Instale ferramentas adicionais se necessário
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Exponha a porta padrão (ajuste conforme necessário)
EXPOSE 8080

# Defina o comando padrão para o container
CMD ["tail", "-f", "/dev/null"]
