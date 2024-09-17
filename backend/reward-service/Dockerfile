# Use a imagem base do Ruby
FROM ruby:2.7

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Instale ferramentas adicionais (opcional)
RUN apt-get update && \
    apt-get install -y build-essential libpq-dev nodejs git

# Exponha a porta padrão para aplicações Ruby on Rails (opcional)
EXPOSE 3000

# Defina o comando padrão para o container
CMD ["tail", "-f", "/dev/null"]
