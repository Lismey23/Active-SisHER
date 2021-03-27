DROP DATABASE IF EXISTS active_userDB;
CREATE database active_userDB;

use  active_userDB;

CREATE TABLE user(
id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(50),
lastName VARCHAR(75),
activity VARCHAR(25),
email VARCHAR(50),
password VARCHAR(10),
Primary Key(id)
);