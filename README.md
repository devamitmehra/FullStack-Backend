# Backend

This backend application uses NestJS and connects to a PostgreSQL database managed by the shared ORM library. It provides a RESTful API to retrieve user information.

## Setup

1. Clone the repository:
    ```sh
    git clone <repository_url> backend
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create environment-specific `.env` files:
    - `development.env`
      ```plaintext
      PORT=3000
      ALLOWORIGIN=http://localhost:8080
      ```

    - `production.env`
      ```plaintext
      PORT=3000
      ALLOWORIGIN=http://localhost:8080
      ```

4. Link the shared ORM library:
    ```sh
    npm link shared-orm-library
    ```

5. Build the project:
    ```sh
    npm run build
    ```

6. Start the development server:
    ```sh
    npm run start
    ```

## Description

This backend application relies on the shared ORM library for database configurations and entities. Ensure the shared ORM library is set up and seeded with data before running the backend.
