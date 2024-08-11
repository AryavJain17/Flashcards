CREATE DATABASE flashcards_db;

USE flashcards_db;

CREATE TABLE flashcards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL
);