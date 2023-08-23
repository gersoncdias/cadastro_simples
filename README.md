## DOCUMENTAÇÃO

### Acessar diretório do docker:
~~~~
cd cadastro_simples
~~~~

### Subir o container:
~~~~
docker-compose up -d --build
~~~~

### Acessar o terminal do container do Docker
~~~~
docker exec -it cadastro_simples_ws_1 bash
~~~~

Dependências:
#### Instalar as dependências com o composer
~~~~
composer install
~~~~

#### limpar runtime, atribuir permissão ao projeto
~~~~
./clear.sh
~~~~

Ambientes para rodar migrates:
#### Criar tabelas RBAC e Admin
~~~~
# Acesso ao cliente do MySql
mysql -u root -p -h 127.0.0.1
user: root
pass: root
~~~~
~~~~
# Executar no cliente do MySql
CREATE DATABASE `cadastro_simples`;
~~~~
Executar comandos abaixo no bash do Docker:
~~~~
php yii-cadastro_simples migrate-rbac
~~~~
~~~~
php yii-cadastro_simples migrate-admin
~~~~
~~~~
php yii-cadastro_simples migrate
~~~~
~~~~
php yii-cadastro_simples migrate-datas
~~~~

#### Acessando o sistema
Abrir o navegador e digitar os dados abaixo:
~~~~
https://localhost/cadastro_simples/web
~~~~
~~~~
login: admin
senha: admin1
~~~~

### Acessar diretório do cypress:
~~~~
cd cadastro_simples/Cypress
~~~~

### Instalar Cypress:
[Doc Oficial Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)


### iniciando Cypress:
~~~~
No diretório do projeto cypress digite:
~~~~
npm install cypress --save-dev
~~~~
cd cadastro_simples/Cypress
~~~~
yarn cypress open

