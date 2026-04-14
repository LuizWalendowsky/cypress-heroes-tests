#  Cypress Heroes - Testes Automatizados e Manuais

Projeto de testes com foco em QA (Quality Assurance), utilizando Cypress para automação E2E e testes manuais.

---

##  Sobre o Projeto

Validação das principais funcionalidades da aplicação Cypress Heroes:
* Login
* Listagem de heróis
* Criação de heróis
* Validações de formulário
* Controle de acesso (UI)
* Identificação de bugs

---

##  Projeto base

A aplicação Cypress Heroes foi utilizada como base apenas para estudo.  
Os testes automatizados e manuais foram desenvolvidos por mim.

---

##  Tecnologias

* Cypress
* JavaScript
* Node.js
* GitHub

---

##  Como executar o projeto

```bash
# Instalação e inicialização do ambiente
npm install
npm run setup
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

###  Executar os testes

> ** Importante:** É necessário entrar na pasta `client` antes de rodar os comandos do Cypress.

**Abrir a interface do Cypress:**
```bash
cd client
npx cypress open
```

**Rodar testes no terminal (Headless):**
```bash
cd client
npx cypress run
```

---

##  Testes Automatizados

### Login
- [x] Login válido
- [x] Email inválido
- [x] Senha inválida
- [x] Campos obrigatórios

### Heróis
- [x] Listagem de heróis
- [x] Criação de herói
- [x] Validação de campos obrigatórios
- [x] Controle de permissão de usuário

---

##  Testes Manuais

**Arquivo de evidência:** `/reports/testes-manuais-cypress-heroes.xlsx`

---

##  Bug encontrado

**BUG-01 - Duplicidade de herói** O sistema permite criar heróis com os mesmos dados (nome, idade, poderes).

* **Resultado esperado:** Não permitir duplicidade ou exibir erro de validação.
* **Resultado atual:** Permite duplicação sem aviso ao usuário.
* **Severidade:** Alta.
* **Evidência:** `/reports/bugs/bug-duplicidade-heroi.png`

---

##  Estrutura do projeto

```text
cypress-heroes/
├── client/
├── server/
├── cypress/
├── reports/
└── README.md
```

---

##  Objetivo

Praticar e demonstrar habilidades em:
* Testes End-to-End (E2E)
* Documentação de testes manuais
* Report de bugs e evidências
* Boas práticas de arquitetura para QA

---

##  Autor

**Luiz Gustavo**
