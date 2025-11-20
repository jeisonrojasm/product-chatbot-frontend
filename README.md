# Product Chatbot

ReactJS frontend for interacting with an AI chatbot backend. Built with TypeScript and Vite, it provides a clean UI to send user enquiries, display LLM responses, and test tool-calling workflows. Includes Docker setup for easy development and deployment.

> ⚠️ **Note: The frontend requires the [*product-chatbot-backend*](https://github.com/jeisonrojasm/product-chatbot-backend) application to be running in order to make API requests.**

## 🛠️ Built with

- ReactJS
- TypeScript
- Vite
- Docker

## ✅ Prerequisites

Before starting, make sure you have the following applications installed:

- ✅ [*Git*](https://git-scm.com/)
- ✅ [*Docker* and Docker Compose](https://www.docker.com/get-started) installed and running

## 📥 Get the project

Clone the repository:

```bash
#Clone the repository
git clone https://github.com/jeisonrojasm/product-chatbot-frontend.git
cd product-chatbot-frontend
```

## 📁 Project Structure

The Product Chatbot frontend is built with React + TypeScript and follows a modular and scalable structure. Vite is used as a bundler, along with best practices to facilitate maintenance, testing, and component reuse.

```bash
product-chatbot-frontend/
├── public/                  # Public files (favicon, index.html)
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Button/          # Example of atomic component
│   │       ├── Button.tsx
│   │       ├── Button.css
│   │       ├── ButtonTypes.ts
│   ├── hooks/               # Reusable custom hooks
│   │   └── useModal.ts
│   ├── utils/               # Utility functions and schemes
│   │   ├── functions.ts
│   │   ├── queries.ts       # Functions that consume the backend API
│   ├── views/               # Page views (grouped by path or flow)
│   │   └── SignIn/
│   │       ├── SignIn.tsx
│   │       ├── SignIn.css
│   │       ├── SignInFunctions.ts
│   │       ├── SignInTypes.ts
│   ├── App.tsx              # Root component of the app
│   ├── App.css              # Global app styles
│   ├── main.tsx             # Main entry point
│   └── index.css            # Base/Global Styles
├── .env                     # Environment variables for development
├── .gitignore               # Files and folders ignored by Git
├── .dockerignore            # Files ignored by Docker
├── Dockerfile               # Frontend image for development
├── docker-compose.yml       # Local frontend orchestration
├── index.html               # HTML base file (used by Vite)
├── package.json             # HTML base file (used by Vite)
├── tsconfig.json            # TypeScript Configuration
└── README.md                # Project documentation
```

### 🧱 Conventions by module

Each module in `views/` and `components/` follows a file separation pattern to maintain a clean and scalable architecture:

| File              | Purpose                                                       |
|-------------------|---------------------------------------------------------------|
| `*.tsx`           | Main component (reusable view or UI)                          |
| `*.css`           | Component or view specific styles                             |
| `*Types.ts`       | Typing of component props, states, and structures             |
| `*Functions.ts`   | Module-specific auxiliary functions                           |

## 🚀 Run

### 1. **`.env` file required**

Normally, the `.env` file **should not be included** in a public repository, as it may contain sensitive configuration values.
However, for demonstration and evaluation purposes —and because this is not a production project— the `.env` file is included in the repository so anyone can run the project without additional setup.

You will find the `.env` file already placed in the root of the project.

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

## 👨‍💻 Author

Developed by **Jeison Rojas Mora** - *Fullstack Developer*

- [https://github.com/jeisonrojasm](https://github.com/jeisonrojasm)
- [https://www.linkedin.com/in/jeison-rojas-mora/](https://www.linkedin.com/in/jeison-rojas-mora/)
