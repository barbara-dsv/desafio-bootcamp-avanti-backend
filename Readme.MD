# 🚀 Plataforma de Trocas de Conhecimentos #

Aplicação backend desenvolvida para conectar pessoas que desejam **ensinar** e **aprender** novas habilidades, promovendo a troca de conhecimentos de forma organizada e acessível.

O sistema permite o cadastro de pessoas, conhecimentos ofertados e o gerenciamento dessas informações através de uma API REST segura.

---

# 📚 Objetivo do Projeto

Muitas pessoas possuem conhecimentos valiosos, mas não têm recursos financeiros para investir em cursos. Ao mesmo tempo, outras pessoas desejam aprender.

Esta aplicação foi criada para:

✅ Facilitar a troca de conhecimentos
✅ Organizar ofertas disponíveis
✅ Conectar pessoas da comunidade
✅ Permitir gerenciamento de informações

---

# 🛠️ Tecnologias Utilizadas

* ⚙️ Node.js
* 🚀 Express
* 🗄️ Prisma ORM
* 🔐 Bcrypt - autenticação
* 🔐 JWT (JSON Web Token) — autenticação e segurança
* 🐘 PostgreSQL
* 📦 JavaScript

---

# 🔐 Autenticação e Segurança

A aplicação utiliza **JWT (JSON Web Token) e Bcrypt** como mecanismo de autenticação.

Após realizar login, o usuário recebe um **token** que deve ser enviado nas requisições protegidas para acessar recursos privados da API.

---

# ⚙️ Como Executar o Projeto

## 📥 Clonar repositório

```bash
git clone URL_DO_REPOSITORIO
```

## 📂 Entrar na pasta

```bash
cd nome-do-projeto
```

## 📦 Instalar dependências

```bash
npm install
```

## 🔑 Configurar variáveis de ambiente

Criar um arquivo `.env` na raiz do projeto com base no `.env.example`.

Exemplo:

```
DATABASE_URL="sua_url_do_banco"
HASH="segredo_jwt"
```

## 🗄️ Gerar Prisma Client

```bash
npx prisma generate


## ▶️ Sincronizar Banco de Dados

```bash
npx prisma migrate dev
```
```

## ▶️ Rodar servidor

```bash
npm run dev
```


# 📡 Rotas da API

## 🌐 Rotas Públicas

* ✅ Cadastro de pessoa
* ✅ Login
* ✅ Listagem de conhecimentos

## 🔒 Rotas Protegidas (necessitam token JWT)

* ✏️ Editar pessoa
* ❌ Deletar pessoa
* ➕ Criar conhecimento
* ✏️ Editar conhecimento
* ❌ Deletar conhecimento

Enviar token no header:

```
Authorization: Bearer SEU_TOKEN
```

---

# 🧩 Funcionalidades

## 👤 Pessoas

* Criar pessoa
* Listar pessoas
* Editar pessoa
* Deletar pessoa

## 📘 Conhecimentos

* Criar conhecimento
* Listar conhecimentos
* Editar conhecimento
* Deletar conhecimento
* Associar conhecimento a uma pessoa
* Filtrar por categoria ou nível 
* Filtrar por título ou descrição
* Detalhar conhecimento


---

# 🗂️ Estrutura do Projeto

```
src/
 ├── controllers/
 ├── middlewares/
 ├── routes.js
 ├── PrismaCliente.js
 └── index.js
```

---

# 👩‍💻 Equipe

Projeto desenvolvido em equipe para o curso **Desenvolvimento Full Stack- Atlântico Avanti**.

Andressa Engel
Bárbara Lourenço
Bruna Melo
Raimunda Nonata

---

# ✅ Status do Projeto

🚧 Em desenvolvimento

---

# 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

# 💡 Autor

Andressa Engel
Bárbará Lourenço
Bruna Melo
Raimunda Nonata


Desenvolvido com dedicação 💙
