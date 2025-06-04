## Domain Information

The project's frontend is deployed and accessible at [https://exb-nsk.ru/](https://exb-nsk.ru/).

It is the online presence for the local religious organization of Evangelical Christian-Baptist Church in Nevinnomyssk, Russia.


## 🛠️ Tech Stack

*   **Frontend:** Next.js, React, CSS Modules
*   **Backend CMS:** Strapi + Postgres
*   **Deployment:** Docker + Coolify
*   **Design:** Figma


## Modes

The project operates in two primary modes, controlled by the `NODE_ENV` environment variable:

*   **`NODE_ENV=develop`:** Development mode.
    *   In this mode, you can not only add content but also modify the content structure (e.g., change models, fields) within the Strapi CMS.
    *   Supports hot-reloading for backend and frontend.

*   **`NODE_ENV=prod`:** Production mode.
    *   In this mode, you are restricted to adding and managing content only. Modifying the content structure is not permitted to ensure stability in a production environment.
    *   Build is optimized for production.


## Setup

To set up the project locally, you need to configure your environment variables.

1.  Locate the `.env.example` file in the project.
2.  Copy this file and rename the copy to `.env`.
3.  **Place the `.env` file inside the `./dev-config` directory.** This is important as Docker Compose automatically loads `.env` files from the directory containing the primary compose file (`docker-compose.yml`) when using the `-f` flag pointing to that directory.
4.  Edit the newly created `.env` file and fill in the required values for your local environment (database credentials, backend URLs, tokens, etc.). Refer to the comments in `.env.example` for guidance.

After configuring the `.env` file, you can proceed with building and running the project using the commands described below.


## Building and Running

To build and run the project, navigate to the `./dev-config` directory in your terminal.

### Build in Development Mode (`NODE_ENV=develop` in .env)

> [!NOTE]
> For frontend hot-reloading set-up `DEV_FRONTEND_SRC_PATH` in .env file - path to frontend/src folder on your maschine.

> [!NOTE]
> For backend hot-reloading set-up `DEV_CMS_SRC_PATH` in .env file - path to cms folder on your maschine.


Use the following command from the `./dev-config` directory to build and run in development mode.

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.override.yml build

docker compose -f docker-compose.yml -f docker-compose.dev.override.yml up
```


### Build in Production Mode (`NODE_ENV=prod` in .env)

Use the following command from the `./dev-config` directory to build and run in production mode:

```bash
docker compose -f docker-compose.yml up -d
```

## Design

The project's design and design system are available on Figma:

[Figma Design Mockup](https://www.figma.com/design/AcRQHVkKdE23KWEj1X4dXL/church-site-mockup?node-id=839-4062&t=ev6bTdmM7bILKGlj-0)


## Contribution Style

Please see the [CONTRIBUTION.md](CONTRIBUTION.md) file for details on contribution style, including commit rules and coding standards.


---
