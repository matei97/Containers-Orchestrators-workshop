CREATE DATABASE clouding;

\c clouding;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
  VALUES ('Popescu', 'popescu@example.com'), ('Ionescu', 'Ionescu@example.com');

SELECT * FROM users;