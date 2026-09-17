# Node.js AWS CI/CD Demo

A full-stack authentication application built to practice **Node.js, Express.js, Angular, Supabase, JWT authentication, OAuth 2.0, Docker, AWS, and CI/CD with GitHub Actions**.

The application provides basic **Login / Signup** functionality with secure authentication and authorization, while the deployment pipeline demonstrates how a full-stack application can be automatically tested, built, containerized, and deployed to AWS.

## Tech Stack

### Backend
* Node.js
* Express.js
* JavaScript
* REST APIs
* JWT Authentication
* JWT-based Authorization
* OAuth 2.0
* Supabase
* Environment Variables

### Frontend
* Angular
* TypeScript
* Tailwind CSS
* PrimeNG

### DevOps / Cloud
* Git & GitHub
* GitHub Actions
* Docker
* AWS EC2
* AWS IAM
* SSH
* CI/CD

---

## Features
* User Signup
* User Login
* JWT-based Authentication
* JWT-based Authorization
* OAuth 2.0 Authentication
* Protected APIs
* Supabase database integration
* Angular frontend
* Responsive UI using Tailwind CSS
* PrimeNG UI components
* Environment-based configuration
* Dockerized application
* Automated CI pipeline
* Automated deployment pipeline
* AWS EC2 deployment

---

## Architecture
                    ┌──────────────────────┐
                    │      Angular UI      │
                    │ Tailwind CSS +       │
                    │       PrimeNG        │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Express.js API    │
                    │      Node.js         │
                    └──────────┬───────────┘
                               │
                    ┌──────────┴───────────┐
                    │                      │
                    ▼                      ▼
             ┌──────────────┐       ┌──────────────┐
             │   Supabase   │       │ OAuth 2.0    │
             │   Database   │       │  Provider    │
             └──────────────┘       └──────────────┘
                    │
                    ▼
             JWT Authentication
                    │
                    ▼
             Protected Resources

## CI/CD Architecture
Developer
    │
    │ git push
    ▼
  GitHub
    │
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    ├── Run Tests
    ├── Build Application
    ├── Build Docker Image
    └── Deploy
          │
          ▼
       AWS EC2
          │
          ▼
      Docker Container
          │
          ▼
    Running Application

## Project Structure
nodejs-aws-cicd-demo/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── config/
│   │   └── app.js
│   │
│   ├── tests/
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── .env.example
│
├── Dockerfile
├── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── .gitignore
└── README.md

## Authentication Flow

### Signup
Angular
   │
   │ POST /api/auth/signup
   ▼
Express.js
   │
   ▼
Validate User
   │
   ▼
Supabase
   │
   ▼
User Created

### Login
Angular
   │
   │ POST /api/auth/login
   ▼
Express.js
   │
   ▼
Validate Credentials
   │
   ▼
Generate JWT
   │
   ▼
Angular

### Protected API
Angular
   │
   │ Authorization: Bearer <JWT>
   ▼
Express Middleware
   │
   ▼
Verify JWT
   │
   ├── Invalid → 401 Unauthorized
   │
   └── Valid
         │
         ▼
      Controller
         │
         ▼
       Response

## OAuth 2.0 Flow
The application also supports OAuth 2.0 based authentication.
User
 │
 ▼
Angular Application
 │
 ▼
OAuth Provider
 │
 │ Authentication
 ▼
Authorization
 │
 ▼
Application Callback
 │
 ▼
Authenticated User
OAuth configuration and provider-specific credentials are stored through environment variables.


## Environment Variables

Sensitive configuration is **not committed to GitHub**.

Create environment variables for the backend such as:

```env
PORT=3000

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

JWT_SECRET=your_jwt_secret

OAUTH_CLIENT_ID=your_client_id
OAUTH_CLIENT_SECRET=your_client_secret
OAUTH_CALLBACK_URL=your_callback_url
```

For local development, use a `.env` file.

> Never commit `.env` files or real credentials to the repository.

Use `.env.example` to document the required variables without exposing their values.

---

## Local Development

### Clone Repository
git clone <repository-url>
cd nodejs-aws-cicd-demo
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend will run on:

```text
http://localhost:3000
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
ng serve
```

Frontend will run on:

```text
http://localhost:4200
```

---

## Docker

The application will be containerized using Docker.

Build the image:

```bash
docker build -t nodejs-aws-cicd-demo .
```

Run the container:

```bash
docker run -p 3000:3000 nodejs-aws-cicd-demo
```

---

## CI Pipeline

GitHub Actions will automatically run when code is pushed to the repository.

The CI pipeline will:

1. Checkout source code
2. Setup Node.js
3. Install dependencies
4. Run tests
5. Build the application
6. Build the Docker image

Example workflow:

```text
git push
   ↓
GitHub Actions
   ↓
Checkout
   ↓
npm install
   ↓
npm test
   ↓
Build
   ↓
Docker Build
```

---

## CD Pipeline

After the CI pipeline succeeds, the CD pipeline will deploy the application to AWS EC2.
GitHub
   │
   │ Push to main
   ▼
GitHub Actions
   │
   ▼
CI
   │
   ├── Test
   └── Build
   │
   ▼
Docker Image
   │
   ▼
AWS EC2
   │
   ▼
Deploy Application

Deployment will be automated using GitHub Actions.
## AWS Infrastructure

The initial deployment environment will use:

* AWS EC2
* Ubuntu
* IAM
* Security Groups
* SSH
* Docker

The EC2 instance will host the application container.

Later, the project can be extended with:

* Amazon ECR
* Application Load Balancer
* AWS RDS
* CloudWatch
* ECS
* Kubernetes / Amazon EKS
* HTTPS
* Domain configuration

---

## Security

The project follows basic security practices:

* Credentials are stored in environment variables.
* Secrets are excluded using `.gitignore`.
* JWT secrets are not hard-coded.
* OAuth credentials are not committed to GitHub.
* AWS access uses IAM rather than root credentials.
* EC2 access uses SSH keys.
* Production secrets can later be migrated to AWS Secrets Manager or Parameter Store.

---

## Learning Objectives

This project is primarily designed as a hands-on learning project for:

### Backend

* Node.js
* Express.js
* REST API development
* Authentication
* Authorization
* JWT
* OAuth 2.0
* Supabase

### Frontend

* Angular
* API integration
* Authentication state
* Tailwind CSS
* PrimeNG

### Cloud

* AWS EC2
* IAM
* Security Groups
* SSH
* Environment variables
* Application deployment

### DevOps / CI/CD

* GitHub Actions
* CI pipelines
* CD pipelines
* Docker
* Automated deployments
* Deployment troubleshooting

---

## Future Improvements

The project can gradually evolve into a more production-oriented deployment:

```text
Current

GitHub
   ↓
GitHub Actions
   ↓
Docker
   ↓
AWS EC2
```

Possible future architecture:

```text
GitHub
   ↓
GitHub Actions
   ↓
Docker
   ↓
Amazon ECR
   ↓
ECS / EKS
   ↓
Load Balancer
   ↓
Application
   ↓
Supabase / RDS
```

The infrastructure will be introduced incrementally so that each component can be understood and implemented separately.

---

## License

This project is intended for learning and experimentation with modern backend, cloud, containerization, and CI/CD practices.
