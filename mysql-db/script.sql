CREATE TABLE IF NOT EXISTS usuario(
id INT AUTO_INCREMENT, 
username varchar(255) NOT NULL,
contenido varchar(255) NOT NULL,
fecha datetime,
primary key(id,username)
);