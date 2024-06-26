# CMS-with-CRUD-and-SQL

This project provides a basic implementation of a headless CMS with CRUD (Create, Read, Update, Delete) functionality. It allows users to create entities with custom attributes and types, and automatically generates a table definition in a PostgreSQL database.

Getting Started

Clone the repository and navigate to the project directory.
Install the required dependencies by running npm install.
Create a Xampp SQL database and update the database configuration in app.jsx.
TO start the website follow these steps:

1) WE go to CMS folder in VS Code
2) Open a terminal for CMS_Proj (Frontend)
3) Enter the command : 'npm i'
4) Enter the command : 'npm run dev'
5) Open a terminal for Backend (Backend)
5) Enter the command : 'npm i'
6) Enter the command :  'npm start'
5) Click the url generated and it will take you to the website. (frontend terminal)
6) To terminate the website we enter "ctrl+ c" on terminal in vs code
7) Then type "y" and press enter
8) Open a web browser and navigate to http://localhost:3000 to access the frontend interface.
9) Creating Entities
    
To create an entity, follow these steps:

Navigate to the frontend interface at http://localhost:3000.
Click on the "Add User" button.
Enter the entity name and attributes with their respective types (e.g., Person with attributes name<string>, email<string>, mobileNumber<number>, and dateOfBirth<Date>).
Click the "Submit" button to create the entity.
CRUD Operations:

Once an entity is created, you can perform the following CRUD operations:

Create: Click on the "Add User" button and enter the data for the new entry.
Read: Click on the "View User" button to view all existing entries for the entity.
Update: Click on the "Edit" button and enter the updated data for an existing entry.
Delete: Click on the "Delete" button to delete an existing entry.
Technical Details

This project uses the following technologies:

Node.js with Express.js as the backend framework
PostgreSQL as the database management system
JavaScript and HTML/CSS for the frontend interface
Development Tools : MYSQL, VS Code, XAMPP(Mysql) 

The query for the sql data base is ->
  CREATE TABLE users (
  id varchar(30) NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  dob varchar(20) NOT NULL,
  phone bigint(10) NOT NULL
)


Limitations:

This project provides a basic implementation of a headless CMS with CRUD functionality. It does not include features such as authentication, authorization, and data validation, which are essential for a production-ready CMS.
