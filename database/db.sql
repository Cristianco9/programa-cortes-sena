CREATE DATABASE customersdb;  

use customersdb;

CREATE TABLE customer (
  id INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  pedido INT(5) NOT NULL,
  altura DOUBLE NOT NULL,
  base DOUBLE NOT NULL,
  tipo TINYTEXT NOT NULL,
  color TINYTEXT NOT NULL,
  doc INT(10) NOT NULL
);