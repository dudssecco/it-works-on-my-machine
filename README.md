# 🔶 "It Works on My Machine" - The Myth of Local Success

A repository dedicated to debunking the legendary developer error: "It works on my machine." If you've ever spent hours trying to understand why something runs perfectly in your local environment but crashes spectacularly on the server, welcome to the club. Here, we explore the root causes of this issue and how to prevent it using DevOps best practices, containers, CI/CD, and more.

## Technologies Utilized:

- Node.js: For the backend of the application.
- MySQL: Relational database to store the data.
- Docker: To create containers and streamline the development and execution of the project.
- Docker Compose: To orchestrate the database and backend containers with ease.

### 1. How to Run the Project

First, clone the repository to your local machine and Navigate to the project directory:
```
git clone https://github.com/dudssecco/it-works-on-my-machine.git
cd it-works-on-my-machine
```

### 2. Install Dependencies

Navigate to the `/src` folder and install the necessary Node.js modules using npm:
```
cd src
npm install
```
After that, go back to the repository it-works-on-my-machine.

### 3. Create the Containers with Docker Compose

Now that the dependencies are installed, go back to the root directory of the project and run the following command to create and start the MySQL and backend containers:
```
docker-compose up --build
```

### 4. Acess the Application

Backend: The application will be available at http://localhost:3000.
Database: MySQL will be available on port `3306`. You can connect to the database using the `root` user and the password `rootpassword`.

## Environment Variables

If you'd like to customize the configurations, you can adjust the environment variables in the `.env` file for the backend and in the `docker-compose.yml` file for the database.

Example of a `.env` file for the backend:
```
DB_HOST=db
DB_USER=root
DB_PASSWORD=rootpassword
DB_NAME=mydb

```

## Database

The MySQL database will be automatically set up on startup, and an `init.sql` file will be executed to populate the database with initial data.

## Accessing Items

Once your application is running, you can view the items stored in the MySQL database by accessing the `/itens` route of the backend.

### 1. Access the Route

To view the items, simply send a GET request to the following URL:
```
http://localhost:3000/itens
```
This will return a list of all items stored in the database, fetched from the table defined in the `init.sql` file.

### 2. Example Response

The response will be in JSON format, something like:
```
[{"id":1,"name":"Key"},{"id":2,"name":"Mouse"},{"id":3,"name":"Keyboard"}]
```
This endpoint allows you to easily view the items from the MySQL table through the API.

