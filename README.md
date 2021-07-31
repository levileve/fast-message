# ✍ Sobre
Estes documento README tem como objetivo fornecer as informações necessárias para se utilizar e o que foi utilizado para desenvolver o projeto. De mais explicações de APIs segue na documentação do Postman.

# 💎 O que foi desenvolvido
Sistema de mensagens simples, sem a necessidade de login.

# 🧰 Ferramentas de desenvolvimento
Linguagem:
- JavaScript;

Ferramentas:
- VSCode;
- Mongodb (site);
- Postman;
- Docker e Docker Compose

Framework e libs principais:
- NodeJs v14.16.0
- Babel
- mongoose v5.13.4

# 📝 Como usar
* Ambiente local:
- Instale todo o ambiente NodeJs necessário na sua máquina;
- Instale todo o ambiente Docker e Docker compose necessário na sua máquina, caso queira utilizar o Docker;
- Abra um terminal com a pasta do projeto;
- Rode um dos comandos:

    - Roda o projeto utilizando só ambiente Node.
        - npm install
        - npm run start

    - Roda o projeto utilizando só ambiente Docker.
        - Para matar a aplicação que já estiver de pé no Docker Compose rode:
            - docker compose down
        - Para rodar a aplicação:
            - docker compose up

    - Após iniciar o projeto:
    
    Abra o Postman, explicações sobre como cada API funciona e um exemplo estão salvos na área de documentação.

# 🚀 Postman:
* Environment do Postman se localiza na pasta /postman do projeto. [Link da documentação](https://documenter.getpostman.com/view/14748428/TzeajmEF).

# 📦 Onde tudo é guardado?
Foi utilizado o próprio site do [mongodb](https://www.mongodb.com) como hospedagem de banco, no arquivo .env do projeto é necessário colocar a credencial de banco para utilizar o sistema.

# 🔗 Links
* [Documentação do projeto no Postman](https://documenter.getpostman.com/view/14748428/TzeajmEF).

* [Site para baixar Postman](https://www.postman.com/downloads/).

* [Site do Mongodb](https://www.mongodb.com).

* [Site da documentação do Mongodb](https://docs.mongodb.com/manual/).

* [Site para baixar Node](https://nodejs.org/en/).

* [Site para baixar Docker](https://www.docker.com).