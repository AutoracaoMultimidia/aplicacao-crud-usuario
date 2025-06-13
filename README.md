# 📚 Aplicação de Geração e Manipulação de Usuários Fictícios

Este projeto foi desenvolvido como parte da disciplina **Autoração Multimídia II** do curso de **Bacharelado em Sistemas e Mídias Digitais** da **Universidade Federal do Ceará (UFC)**.

## 👨‍🏫 Autor

**Prof. Wellington W. F. Sarmento**  
Instituto Universidade Virtual (UFC Virtual)
Universidade Federal do Ceará (UFC)

---

## ✅ Requisitos Funcionais

| ID      | Descrição                                     |
|---------|-----------------------------------------------|
| RF0001  | Gerar usuários fictícios com nome, idade, endereço e e-mail |
| RF0002  | Listar os usuários em uma interface web com paginação |
| RF0003  | Ordenar os usuários por nome ou idade, de forma crescente ou decrescente |
| RF0004  | Inserir um novo usuário na base de dados (arquivo JSON) |
| RF0005  | Atualizar os dados de um usuário pelo ID |
| RF0006  | Remover um usuário pelo ID |
| RF0007  | Salvar e manter persistência dos usuários em arquivo JSON |

---

## 📘 Acesso ao Tutorial

Você pode acessar o tutorial completo no arquivo:  
👉 [`tutorial.md`](./public/tutorial.md)

---

## 📂 Estrutura dos Arquivos

- server.js: servidor Express com API RESTful
- index.html: interface de listagem
- script.js: funções de carregamento, ordenação e paginação
- style.css: estilo da interface
- usuarios.json: banco de dados local
- gerar_usuarios_fake.js: gera usuários fictícios

## 📘 Funcionalidades

| ID     | Descrição                                                                | Implementado |
| ------ | ------------------------------------------------------------------------ | ------------ |
| RF0001 | Gerar usuários fictícios com nome, idade, endereço e e-mail              | ☑️           |
| RF0002 | Listar os usuários em uma interface web com paginação                    | ☑️           |
| RF0003 | Ordenar os usuários por nome ou idade, de forma crescente ou decrescente | ☑️           |
| RF0004 | Inserir um novo usuário na base de dados (arquivo JSON)                  | ⬜            |
| RF0005 | Atualizar os dados de um usuário pelo ID                                 | ⬜            |
| RF0006 | Remover um usuário pelo ID                                               | ⬜            |
| RF0007 | Salvar e manter persistência dos usuários em arquivo JSON                | ⬜            |

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **@faker-js/faker**
- **UUID**
- **Body-Parser**
- **CORS**
- **HTML + JavaScript puro (sem frameworks)**

---

## 🛠️ Como Baixar e Executar a Aplicação

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/usuarios-app.git
cd usuarios-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute a API de geração de usuários

```bash
npm start
```

A aplicação estará disponível em: `http://localhost:3000`

### 4. Criando um arquivo com 1000_000 de usuários _fake_

Esta aplicação faz uso do arquivo `usuarios.json`que contém as informações de um milhão de usuários. No caso, foi usada a biblioteca *fake-js* para gerar estas informações. O código de geração dos susuários _fake_ se encontra no arquivo `gerar_usuarios.js`, presente nesse projeto.

O funcionamento da funcionalidade de geração dos usuários _fake_ se eoncontra no arquivo `criando-json-usuarios.md`, que pode ser acessado através deste link: [acesso à explicação]("./criando-json-usuarios.md").

---


---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.