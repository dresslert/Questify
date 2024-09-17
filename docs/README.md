# Questify: Plataforma de Desafios de Estilo RPG na Vida Real

## Descrição do Projeto

O **Questify** será uma plataforma gamificada open source que transforma tarefas do dia a dia em missões de RPG. Os usuários podem completar missões individualmente ou em grupos (guildas), ganhando pontos de experiência, recompensas, e subindo de nível conforme avançam. A plataforma inclui elementos de progressão de personagem, competições entre guildas e um sistema de conquistas para motivar o engajamento contínuo.

---

## Funcionalidades Principais(inicias)

- **Missões Personalizadas:** Criação de tarefas que se transformam em "quests" com pontos de experiência e recompensas.
- **Progressão de Personagem:** Sistema de níveis, habilidades e evolução conforme os desafios são completados.
- **Guildas e Grupos:** Permite a formação de grupos para concluir missões colaborativas ou competir em desafios semanais.
- **Sistema de Recompensas:** Distribuição de moedas virtuais, itens e recompensas baseadas em conquistas.
- **Gamificação:** Gerenciamento de badges, conquistas e rankings globais.

---

## Arquitetura e Tecnologias Utilizadas

A arquitetura do **Questify** é baseada em **microsserviços**, o que garante escalabilidade, independência de funcionalidades e facilidade de manutenção. Para tornar o desenvolvimento mais dinâmico e exploratório, utilizaremos linguagens de programação diferentes para cada microsserviço e frameworks modernos para o frontend. Além disso, um sistema de mensageria facilitará a comunicação entre os microsserviços.

### 1. **Frontend (Web e Mobile)**
#### Web
- **Framework:** [React.js](https://reactjs.org/)
- **Linguagem:** JavaScript (ES6+)
  
#### Mobile
- **Framework:** [Flutter](https://flutter.dev/)
- **Linguagem:** Dart

### 2. **API Gateway**
- **Ferramenta:** [NGINX](https://www.nginx.com/)

### 3. **Mensageria**
- **Ferramenta:** [Apache Kafka](https://kafka.apache.org/)

---

## Microsserviços

Cada um dos microsserviços do Questify será responsável por uma funcionalidade específica do sistema. Para deixar divertido o desenvolvimento, vou usar uma linguagem diferentes para cada serviço.

### a) **Microsserviço de Gestão de Missões**
- **Linguagem:** [Node.js](https://nodejs.org/)
- **Banco de Dados:** NoSQL (MongoDB)
- **Responsabilidades:**
  - Criação, edição, exclusão e consulta de missões.
  - Associar recompensas e pontos de experiência às missões.
- **Principais Endpoints:**
  - `POST /mission` – Criar nova missão.
  - `GET /mission/{id}` – Obter detalhes de uma missão.
  - `PUT /mission/{id}` – Atualizar missão existente.
  - `DELETE /mission/{id}` – Excluir missão.

### b) **Microsserviço de Progressão de Personagem**
- **Linguagem:** [Python (Flask)](https://flask.palletsprojects.com/)
- **Banco de Dados:** PostgreSQL
- **Responsabilidades:**
  - Gerenciar níveis, habilidades e experiência dos personagens.
  - Atualizar o progresso dos personagens conforme missões são completadas.
- **Principais Endpoints:**
  - `GET /character/{id}` – Obter status do personagem.
  - `POST /character/{id}/progress` – Atualizar progresso do personagem.
  - `GET /character/{id}/skills` – Consultar habilidades do personagem.

### c) **Microsserviço de Guildas e Grupos**
- **Linguagem:** [Go](https://golang.org/)
- **Banco de Dados:** MongoDB
- **Responsabilidades:**
  - Criar e gerenciar guildas.
  - Permitir que os usuários formem grupos e participem de missões colaborativas.
  - Gerenciar competições e missões semanais entre guildas.
- **Principais Endpoints:**
  - `POST /guild` – Criar nova guilda.
  - `GET /guild/{id}` – Obter detalhes da guilda.
  - `POST /guild/{id}/add-member` – Adicionar membro a uma guilda.
  - `GET /guild/{id}/missions` – Consultar missões da guilda.

### d) **Microsserviço de Sistema de Recompensas**
- **Linguagem:** [Ruby (Ruby on Rails)](https://rubyonrails.org/)
- **Banco de Dados:** MongoDB
- **Responsabilidades:**
  - Distribuir moedas virtuais e itens após a conclusão de missões.
  - Gerenciar o inventário de recompensas dos usuários.
- **Principais Endpoints:**
  - `POST /rewards` – Distribuir recompensas aos usuários.
  - `GET /rewards/{user_id}` – Consultar recompensas recebidas por um usuário.

### e) **Microsserviço de Gamificação**
- **Linguagem:** [Java (Spring Boot)](https://spring.io/projects/spring-boot)
- **Banco de Dados:** MongoDB
- **Responsabilidades:**
  - Gerenciar badges e conquistas dos jogadores.
  - Manter rankings globais de desempenho dos usuários.
- **Principais Endpoints:**
  - `POST /gamification/badge` – Conceder uma conquista a um usuário.
  - `GET /gamification/leaderboard` – Consultar ranking global.

### f) **Microsserviço de Cadastro de Usuários**
- **Linguagem:** Rust
- **Banco de Dados:** PostgreSQL
- **Responsabilidades:**
    - Gerenciar o cadastro, login e autenticação dos usuários.
    - Manter perfis de usuários e suas informações básicas.
    - Implementar autenticação segura utilizando OAuth 2.0 e JWT para a criação de sessões.
- **Principais Endpoints:**
    - `POST /register` – Criar nova conta de usuário.
    - `POST /login` – Autenticar um usuário e gerar um token JWT.
    - `POST /logout` – Invalidação do token JWT.
    - `POST /password-reset` – Enviar um e-mail de redefinição de senha.
    - `GET /user/{id}` – Obter informações do perfil de um usuário.
    - `PUT /user/{id}` – Atualizar informações do perfil.

---

## Comunicação e Orquestração

### Mensageria
- **Ferramenta:** [Apache Kafka](https://kafka.apache.org/)
- **Descrição:** Utiliza o Kafka para comunicação assíncrona entre os microsserviços. Eventos como a conclusão de missões e atualizações de progresso são enviados via Kafka para que os serviços possam reagir adequadamente, garantindo escalabilidade e confiabilidade.

### Orquestração de Contêineres
- **Ferramenta:** [Kubernetes](https://kubernetes.io/)
- **Descrição:** Kubernetes será usado para orquestrar, escalar e gerenciar os contêineres de microsserviços, garantindo alta disponibilidade e escalabilidade do sistema.

---

## Autenticação e Autorização
- **Sistema:** [OAuth 2.0](https://oauth.net/2/) com **JWT (JSON Web Tokens)**
- **Descrição:** Usa OAuth 2.0 para autenticação e JWT para gerenciar sessões seguras entre o frontend e os microsserviços.

---

## Monitoramento e Logs
- **Monitoramento:** [Prometheus](https://prometheus.io/) + [Grafana](https://grafana.com/)
  - Prometheus será utilizado para monitorar a saúde e performance dos microsserviços.
  - Grafana fornecerá dashboards para visualização de métricas em tempo real.
  
- **Logging:** [ELK Stack (ElasticSearch, Logstash, Kibana)](https://www.elastic.co/what-is/elk-stack)
  - A pilha ELK será usada para centralizar e analisar os logs de todos os microsserviços.

---

## DevOps e CI/CD
- **Ferramentas:** [GitLab CI](https://about.gitlab.com/features/gitlab-ci-cd/)
- **Descrição:** Usa GitLab CI para pipelines de integração e entrega contínua, garantindo um fluxo de desenvolvimento ágil e uma implantação automatizada.

---
