# 🚀 Backend API

Este projeto é um backend RESTful desenvolvido com **Node.js**, **Express** e **Prisma**, utilizando **Swagger** para documentação e **Jest** para testes unitários.

## 📌 Tecnologias Utilizadas
- **Node.js** (JavaScript ES Modules)
- **Express** (Framework para APIs)
- **Prisma** (ORM para banco de dados)
- **Swagger** (Documentação da API)
- **Jest** + **Sinon** (Testes unitários)
- **Dotenv** (Gerenciamento de variáveis de ambiente)

---

## 📥 Instalação

1️⃣ Clone o repositório:
```
git clone https://github.com/seu-usuario/backend-api.git
cd backend-api
```

2️⃣ Instale as dependências:

``` 
npm install 
```
3️⃣ Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e adicione suas configurações:

``` 
DATABASE_URL="postgresql://user:password@localhost:5432/database"
PORT=3000 
```

▶️ Executando o Projeto
Iniciar o Servidor
```
npm start
```
Ou, se estiver em desenvolvimento com Nodemon:
```
npm run dev
```
Rodando Migrações do Prisma
Se estiver usando o Prisma como ORM, crie as tabelas com:

```
npx prisma migrate dev
```

##  📖 Documentação da API
A API está documentada com Swagger.

1️⃣ Inicie o servidor local:

```
npm start
```

2️⃣ Acesse a documentação no navegador:

```
http://localhost:3000/api-docs
```

3️⃣ Se precisar do Swagger JSON, acesse:
``` http://localhost:3000/swagger.json ```

##  🛠️ Testes Unitários
Os testes unitários foram implementados utilizando Jest e Sinon.

Executar Testes
``` npm test```

Se estiver usando ES Modules, utilize:

``` 
set NODE_OPTIONS=--experimental-vm-modules && npm test   # Windows (CMD)
$env:NODE_OPTIONS="--experimental-vm-modules"; npm test  # PowerShell
NODE_OPTIONS=--experimental-vm-modules npm test          # Linux/macOS
```

Cobertura de Testes
Para visualizar a cobertura de testes, use:

```
npm run test:coverage
```

##  🏗️ Estrutura do Projeto
```
/backend
│── /node_modules
│── /src
│   ├── /config            # Configurações gerais
│   ├── /controllers       # Controladores (lógica das requisições)
│   ├── /middlewares       # Middlewares globais (ex: tratamento de erros)
│   ├── /repository        # Camada de acesso ao banco de dados (Prisma)
│   ├── /routes            # Definição das rotas da API
│   ├── /services          # Regras de negócio e lógica principal
│   ├── /utils             # Funções auxiliares
│   ├── app.js             # Configuração principal do Express
│   ├── swagger.js         # Configuração do Swagger
│── /tests                 # Testes unitários com Jest
│── .env                   # Variáveis de ambiente
│── .gitignore             # Arquivos ignorados pelo Git
│── package.json           # Dependências e scripts
│── jest.config.js         # Configuração do Jest
│── README.md              # Documentação do projeto
│── server.js              # Arquivo de inicialização

```

##  ⚠️ Tratamento de Erros
Os erros são tratados usando middlewares personalizados. Exemplo de resposta de erro:

```
{
  "status": 400,
  "message": "Invalid input data"
}
```

##  🛠️ Possíveis Melhorias Futuras
- ✅ Adicionar autenticação JWT para rotas protegidas
- ✅ Implementar cache com Redis
- ✅ Criar integração com um serviço de mensagens (ex: RabbitMQ)
- ✅ Melhorar a cobertura de testes
- ✅ Implementar tipagem com TypeScript
- ✅ Reestruturar para arquitetura limpa

##  ⚠️ Dependências
Esse repositório tem como dependência não obrigatória a interface desenvolvida em React.js, confira [aqui](https://github.com/mandis-ncs/react-node-fullstack-user)!
