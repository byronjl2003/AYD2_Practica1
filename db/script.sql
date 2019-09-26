create table usuario(
id INT AUTO_INCREMENT, 
username varchar(255) NOT NULL UNIQUE,
contenido varchar(255) NOT NULL,
fecha date,
primary key(id,username)
);