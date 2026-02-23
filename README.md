# mensageiro-challenge-fs

:warning: **WIP** :warning:

## Prerequisites

- Docker Desktop (ou Docker + Docker Compose)
- Node.js >= 20

---

## How to run ?

### 1️ Clone the repository

```bash
git clone https://github.com/eduardotashiro/mensageiro-challenge-fs
cd mensageiro-challenge-fs
```

---

### 2️ Configure the environment variables.

Linux / macOS / Git Bash:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
```

Windows PowerShell:

```powershell
copy .env.example .env
copy backend/.env.example backend/.env
```

---

### 3️ Upload the database

```bash
docker compose up -d
```

---

### 4️ Install the dependencies and run the backend.

```bash
cd backend
npm install
npm run dev
```



### structure


```
├── backend
│   ├── prisma
│   │   ├── migrations
│   │   │   ├── 20260221023123_init
│   │   │   │   └── migration.sql
│   │   │   ├── 20260222193621_add_email_relations
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   └── schema.prisma
│   ├── src
│   │   ├── config
│   │   │   └── config.ts
│   │   ├── controllers
│   │   │   ├── auth.controller.ts
│   │   │   ├── email.controller.ts
│   │   │   ├── template.controller.ts
│   │   │   └── users.controller.ts
│   │   ├── generated
│   │   ├── lib
│   │   │   └── prisma.ts
│   │   ├── middleware
│   │   │   └── authMiddleware.ts
│   │   ├── routes
│   │   │   ├── auth.route.ts
│   │   │   ├── email.route.ts
│   │   │   ├── templates.route.ts
│   │   │   └── users.route.ts
│   │   ├── services
│   │   │   ├── emailService.ts
│   │   │   ├── loginService.ts
│   │   │   ├── registerService.ts
│   │   │   ├── templatesService.ts
│   │   │   └── usersService.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   └── src
│       ├── assets
│       │   └── bg-leve.jpg
│       ├── pages
│       │   ├──  login.html
│       │   ├── mensageiro.html
│       │   └── register.html
│       ├── scripts
│       │   ├── api.js
│       │   └── register.js
│       └── style
│           ├── login.css
│           ├── mensageiro.css
│           └── register.css
├── .env.example
├── .gitignore
├── README.md
├── docker-compose.yml
├── package-lock.json
└── package.json
```