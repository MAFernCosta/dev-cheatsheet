# SQL Commands table

## Database Create, Delete

| SQL                                 | Description                   |
|-------------------------------------|-------------------------------|
| CREATE DATABASE test;               | Create database               |
| CREATE DATABASE IF NOT EXISTS test; | Create database if not exists |
| USE test;                           | Select the database.          |
| DROP DATABASE test;                 | Delete database               |

## Table Create, Rename ...

| SQL                                             | Description                            |
|-------------------------------------------------|----------------------------------------|
| CREATE TABLE student(id INT, name VARCHAR 100); | Create table                           |
| RENAME TABLE student TO student_old;            | Rename                                 |
| DROP TABLE student;                             | Delete table                           |
| DROP TABLE IF EXISTS employee;                  | Delete table if exists                 |
| DESC table;                                     | Table description, shows the datatypes |
| CREATE TABLE teacher LIKE student;              | Make a copie of a table                |

## Fields add, rename, delete

| SQL                                                      | Description                     |
|----------------------------------------------------------|---------------------------------|
| ALTER TABLE student ADD nachname VARCHAR(100);           | Add a column                    |
| ALTER TABLE student RENAME COLUMN nachname TO lastname;  | Rename a column                 |
| ALTER TABLE employee CHANGE name last_name VARCHAR(100); | Rename and also change Datatype |
| ALTER TABLE student DROP lastname;                       | Delete Column                   |
| ALTER TABLE employee DROP COLUMN nickname;               | Delete Column                   |
| ALTER TABLE Persons MODIFY COLUMN Age int NOT NULL;      | Change Datatype or Constraints  |

## Data types

| Type                        | Description                                                                                                                       |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| CHAR(size)                  | A FIXED length string (can contain letters, numbers, and special characters).                                                     |
| VARCHAR(size)               | A VARIABLE length string (can contain letters, numbers, and special characters).                                                  |
| BINARY(size)                | Equal to CHAR(), but stores binary byte strings.                                                                                  |
| VARBINARY(size)             | Equal to VARCHAR(), but stores binary byte strings.                                                                               |
| TINYBLOB                    | For BLOBS (Binary Large Objects)                                                                                                  |
| TINYTEXT                    | Holds a string with a maximum lenght of 255                                                                                       |
| TEXT(size)                  | Holds a string with a maximum length of 63,535 bytes                                                                              |
| BLOB(size)                  | For BLOBs (Binary Large Objects). Holds up to 65,535 bytes of data                                                                |
| MEDIUMTEXT                  | Holds a string with a maximum length of 16,777,215characters                                                                      |
| MEDIUMBLOB                  | For BLOBs (Binary Large Objects). Holds up to 16,777,215 bytes data                                                               |
| LONGTEXT                    | Holds a string with a maximum length of 4,294,967,295 characters                                                                  |
| LONGBLOB                    | For BLOBs (Binary Large Objects). Holds up to 4,294,967,295 bytes of data                                                         |
| ENUM(val1, val2, val3, ...) | A string object that can have only one value, chosen from a list of possible values.                                              |
| SET(val1, val2, val3, ...)  | A string object that can have 0 or more values, chosen from a list of possible values. You can list up to 64 values in a SET list |

## INSERT DATA 

| SQL                                        | Description          |
|--------------------------------------------|----------------------|
| INSERT INTO table (fields) VALUES (values) | Insert data in table |

## SELECT 

| SQL                              | Description                          |
|----------------------------------|--------------------------------------|
| SELECT * FROM employee;          | Select all from table                |
| SELECT columnname FROM table;    | Select only specific column's        |
| SELECT FROM table WHERE city=""; | Seletct only where condition is true |

## Constraints 

| SQL          | Description                                                                     |
|--------------|---------------------------------------------------------------------------------|
| NOT NULL     | Ensures that a column cannot have a NULL value                                  |
| UNIQUE       | Ensures that all values in a column are different                               |
| PRIMARY KEY  | A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table |
| CHECK        | Ensures that the values in a column satisfies a specific condition              |
| DEFAULT      | Sets a default value for a column if no value is specified                      |
| CREATE INDEX | Used to create and retrieve data from the database very quickly                 |

### Foreign key

```SQL
# fk_game_review -> Relationship name;
ALTER TABLE review ADD CONSTRAINT fk_game_review FOREIGN KEY (game_id) REFERENCES game(game_id);

# Delete Relatioship
ALTER TABLE review DROP FOREIGN KEY fk_user_review;
```

### CHECK 

Ensures that the values in a column satisfies a specific condition
```SQL
CREATE TABLE tablename ()

```
## Set 

| SQL                         | Description                      |
|-----------------------------|----------------------------------|
| SET FOREIGN_KEY_CHECKS = 0; | Disable the Relationship control |
| SET SQL_SAFE_UPDATES = 0;   | You can delete a line in a table |
