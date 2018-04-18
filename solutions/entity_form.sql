DROP DATABASE IF EXISTS entity_form;
CREATE DATABASE entity_form;

\c entity_form;

CREATE TABLE entityForms (
  ID SERIAL PRIMARY KEY,
  text VARCHAR
);

INSERT INTO entityForms (text)
  VALUES ('This is entity form test');