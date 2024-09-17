# Use a imagem base do Python
FROM python:3.12

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Instale ferramentas adicionais (opcional)
RUN apt-get update && \
    apt-get install -y build-essential

# Exponha a porta padrão para aplicações Python (opcional)
EXPOSE 5000

# Defina o comando padrão para o container
CMD ["tail", "-f", "/dev/null"]
