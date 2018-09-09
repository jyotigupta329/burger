-- Create the burgers_db.
DROP DATABASE IF EXISTS burgers_db
;
CREATE DATABASE burgers_db;

-- Switch to or use the burgers_db.
USE burgers_db;

-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
CREATE TABLE burgers
(
    id INTEGER NOT NULL,
    burger_name VARCHAR(50),
    devoured VARCHAR(50),
    PRIMARY KEY(id)
)







