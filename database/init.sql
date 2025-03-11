CREATE TABLE IF NOT EXISTS itens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO itens (name) VALUES ('Key'), ('Mouse'), ('Keyboard');
