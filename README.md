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
│   ├── src
│   │   ├── config
│   │   │   └── config.ts
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   │   └── users.route.ts
│   │   ├── services
│   │   ├── utils
│   │   └── server.ts
│   ├── .env.example
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── frontend
├── .env.example
├── .gitignore
├── README.md
└── docker-compose.yml
```
