# Product Chatbot

## 🛠️ Built with

- ReactJS
- TypeScript
- Vite
- Docker
- Vitest

## ✅ Prerequisites

Before starting, make sure you have the following applications installed:

- ✅ [*Git*](https://git-scm.com/)
- ✅ [*Docker* y Docker Compose](https://www.docker.com/get-started) installed and running

## 📥 Get the project

Clone the repository:

```bash
#Clone the repository
git clone https://github.com/jeisonrojasm/product-chatbot-frontend.git
cd product-chatbot-frontend
```

## 🚀 Execute

### 1. **`.env` file required**

The `.env` file contains sensitive variables required to run the project (such as credentials, tokens, and service URLs).
For security reasons, **it is not included in the repository**.

> 🔐 **In the email you received, you will find the `.env` file required for the frontend to run correctly.**

Once you have the `.env` file, place it in the root of the project.

### 2. Setting up the development environment with Docker

Due this application is fully Dockerized, you don't need to manually install Node.js or any dependencies on your computer. Simply run the following command from the project root to build the image and launch the frontend container:

```bash
docker-compose up -d --build
```

This command will perform the following actions:

- It will build the Docker image defined in the `Dockerfile`, using `node:24-alpine` as a base.
- It will automatically install all dependencies declared in `package.json`.

Once the process is complete, the frontend will be available at:

```arduino
http://localhost:5173
```

## ✅ Ready-to-use application

Once the previous steps are completed:

- The frontend will be running at `http://localhost:5173`.
- You will be able to use the UI to make petitions to backend app.
