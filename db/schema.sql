DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR
    (50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);