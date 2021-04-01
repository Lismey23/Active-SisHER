DROP DATABASE IF EXISTS groupSelectionDB;
CREATE DATABASE groupSelectionDB;

USE groupSelectionDB;

CREATE TABLE groups(
    id INT NOT NULL AUTO_INCREMENT,
    category INT NOT NULL,
    activity VARCHAR(25),
    PRIMARY KEY(id),
    FOREIGN KEY (category) REFERENCES ActiveUser(category) 
);


