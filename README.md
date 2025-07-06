# MERN Quick Monorepo Boilerplate

This project is a monorepo with a client and a server.

## Quick Start as a Boilerplate

This repository can be used as a boilerplate for a full-stack Express and React application. Follow these steps to get started quickly:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/crud-shop.git
    cd crud-shop
    ```

    _(Replace `your-username` with the actual GitHub username or organization if you fork this repo)_

2.  **Install dependencies:**
    This project uses Yarn workspaces. Run the following command from the root directory to install dependencies for both the client and server:

    ```bash
    yarn install
    ```

3.  **Start the development servers:**
    To run both the client (React) and server (Express) in development mode, open two separate terminal windows:
    - **Terminal 1 (for Server):**

      ```bash
      cd server
      yarn dev
      ```

      The server will typically run on `http://localhost:5000` (or as configured in `server/src/config/index.ts`).

    - **Terminal 2 (for Client):**
      ```bash
      cd client
      yarn dev
      ```
      The client (React app) will typically run on `http://localhost:5173` (or as configured in `client/vite.config.ts`).

    Your Express React monorepo boilerplate is now up and running!

## Getting Started

To get started, you'll need to have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed.

Then, you can install the dependencies by running the following command in the root of the project:

```bash
yarn install
```

## Available Scripts

In the root of the project, you can run the following scripts:

- `yarn format`: Formats the code.

In the `client` directory, you can run the following scripts:

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the app for production.
- `yarn lint`: Lints the code.
- `yarn format:check`: Checks the formatting of the code.
- `yarn format`: Formats the code.
- `yarn preview`: Previews the production build.

In the `server` directory, you can run the following scripts:

- `yarn build`: Builds the app for production.
- `yarn start`: Starts the production server.
- `yarn dev`: Starts the development server.
- `yarn format:check`: Checks the formatting of the code.
- `yarn format`: Formats the code.
- `yarn lint:check`: Lints the code.
- `yarn lint:fix`: Lints and fixes the code.
