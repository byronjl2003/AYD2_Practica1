CREATE TABLE IF NOT EXISTS usuario(
id INT AUTO_INCREMENT, 
username varchar(255) NOT NULL,
contenido varchar(255) NOT NULL,
fecha datetime DEFAULT CURRENT_TIMESTAMP,
primary key(id,username)
);



DELIMITER //
CREATE PROCEDURE ADD_OR_EDIT_USER(IN _id INT,IN _username varchar(255),IN _contenido varchar(255))
BEGIN
	IF _id=0 THEN
		INSERT INTO usuario(username,contenido)values(_username,_contenido);
		SET _id= LAST_INSERT_ID();
	ELSE
		UPDATE usuario
        SET             
			contenido=_contenido
            WHERE id=_id;
    END IF;    
    SELECT _id as id;
END
DELIMITER//

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'secret';
FLUSH PRIVILEGES;
