<h1 align="center">
  <img src="./docs/images/logo.png" alt="Logo FIAP Tarefas"  width="200px">
</h1>

![Languages](https://img.shields.io/github/languages/count/mikansc/fiap-tarefas)
![GitHub top language](https://img.shields.io/github/languages/top/mikansc/fiap-tarefas?style=flat-square)
![Repository size](https://img.shields.io/github/repo-size/mikansc/fiap-tarefas?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/mikansc/fiap-tarefas/main?label=last%20commit)

# FiAP Tarefas

<p align="center">
  <a href="#page_facing_up-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-como-configurar-e-executar">Como configurar e executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wave-autor">Autor</a>&nbsp;&nbsp;&nbsp;
</p>

---

<br />

## :page_facing_up: Sobre

O FIAP Tarefas é um trabalho de conclusão do módulo **Front End Engineering** do curso **MBA em Engenharia de Software** da FIAP.

O objetivo do projeto é, seguindo um protótipo FIGMA, desenvolver uma aplicação com NextJS, aplicando o conteúdo visto em sala de aula.

<br />

### Demo

- O deploy de demonstração foi realizado no Render. Quando inativo por mais de 15 minutos, as instâncias são derrubadas e um novo cold boot precisa ser iniciado. Isso pode fazer com que, no primeiro acesso, a aplicação demore para rodar.

- Para usar o app, é necessário realizar um cadastro. **Não há necessidade de usar dados reais**, já que esta é uma aplicação de demonstração.

[Acesse a demo para ver o sistema online clicando neste link](https://mk-fiap-tarefas.onrender.com/)

<br />
<br />

## :gear: Como configurar e executar

### Pré-requisitos

```bash
# Clonar o repositório
git clone https://github.com/mikansc/fiap-tarefas.git

# Navegar para o diretório
cd fiap-tarefas
```

<br />

---

### Utilizando o Docker

- Crie um arquivo `.env` na pasta raiz e configure as seguintes variáveis de ambiente:

| Variável        | Descrição                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **CONN_STRING** | String de conexão com o MongoDB. Utilize `mongodb://mongo_db:27017/fiapi-tarefas` para rodar esta aplicação com o docker-compose |
| **SECRECT_KEY** | Chave utilizada para encriptação de senhas. Você pode escolher qualquer valor de string.                                         |

<br />

- Execute o comando abaixo para iniciar os containers

```bash
# Inicializar os containers
docker-compose up -d
```

- Acesse http://localhost:3000

<br />

---

### Sem o Docker

- Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/) e configure um banco de dados conforme documentação

- Crie um arquivo `.env.local` na pasta raiz e configure as seguintes variáveis de ambiente (exemplo: [.env.example](./.env.example)):

| Variável                 | Descrição                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| **DB_CONNECTION_STRING** | String de conexão com o MongoDB. Utilize a string gerada pelo MongoDB Atlas              |
| **MY_SECRET_KEY**        | Chave utilizada para encriptação de senhas. Você pode escolher qualquer valor de string. |

- Execute os comandos abaixo para iniciar modo dev:

```bash
# Para instalar as dependências
yarn
# para iniciar o projeto
yarn dev
```

- Acesse http://localhost:3000

<br/>
<br/>

---

## :wave: Autor

<a href="http://www.mkwebdev.com.br/">
 <img style="border-radius: 50%;" src="https://github.com/mikansc.png" width="80px;" alt=""/>
 <br />
 <sub><b>Michael Nascimento</b></sub></a> <a href="https://www.linkedin.com/in/michaelnsc/" title="Michael no Linkedin"></a>
 <br />
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Michael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/michaelnsc/)](https://www.linkedin.com/in/michaelnsc/)
[![Microsoft Badge](https://img.shields.io/badge/-michael.nsc@outlook.com-blue?style=flat-square&logo=Microsoft&logoColor=white&link=mailto:michael.nsc@outlook.com)](mailto:michael.nsc@outlook.com)
