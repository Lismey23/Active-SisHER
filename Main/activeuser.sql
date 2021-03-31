DROP DATABASE IF EXISTS active_userDB;
CREATE database active_userDB;
use  active_userDB;

CREATE TABLE activeProfile(
id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(50), 
lastName VARCHAR(75),
activity VARCHAR(25),
email VARCHAR(50),
password VARCHAR(50),
Primary Key(id)
);


