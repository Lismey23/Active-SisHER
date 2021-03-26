DROP DATABASE IF EXISTS activeuser_db;
CREATE DATABASE activeuser_db;

CREATE TABLE activeprofile_db(
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR (50),
category INTEGER,
email VARCHAR (50),
PRIMARY KEY (id)
);