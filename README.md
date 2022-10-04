# E-commerce Back End

## Description

---

Application designed for the purposes of building the back-end for an e-commerce website. Through the use of this application, you will be able to understand the basic architecture of e-commerce sites and how the requests are made to interact with the database.

## Table of Contents

---

- [Installation](#installation)
- [Usage](#usage)
- [Technology](#technology)
- [Demonstration](#demonstration)
- [Authors](#authors)
- [Notes](#notes)

## Installation

---

    - Download or clone this repository,
    - Make sure to have Node.js installed,
    - Open up your integrated terminal and type "npm install" or "npm i" to install the required npm packages.
    - dotenv is listed as a dependency, however, it's purpose was only to hide my personal credientials, which creates the connection to the MySQL database.
    - nodemon is listed as a devDependency and isn't required for the use of this application. Only purpose was for development.

## Usage

---

After installation of the dependencies, you should copy the following code and paste it into a .env file. I would update DB_PW to your own personal password used to login to the MySQL Database within the quotation marks. This will allow the connection to be made between Sequelize and the MySQL database.

    DB_NAME = 'ecommerce_db'
    DB_USER = 'root'
    DB_PW = ''

Before initalizing the application, you would need to open up the integrated terminal and type in the following command

    mysql -u root -p

You will then be prompted to input your password from MySQL. From there, you will then run the following command to create the database.

    source db/schema.sql;

Now that the database has been created and the connection has been made, you can now start the application by running the following commands in the terminal. The first command will fill up the database with preset values and the the command following that will initate the application.

    npm run seed
    npm start

To show full functionality of the application, you would need to test all of the API routes in Insomnia.

## Technology

---

Technology used to build the application:

    - Javascript
    - Node.js
    - MySQL
    - Sequelize
    - Express.js

## Demonstration

---

[Demonstration Video](https://drive.google.com/file/d/1pn1rukwP1pT-2wufEYcNCjY9XzJAYgtC/view)

## Authors

---

- Tony Tran
  - [GitHub](https://github.com/tonytran97)

## Notes

---

This application was built off of starter code.
