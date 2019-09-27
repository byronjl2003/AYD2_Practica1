FROM mysql
ENV MYSQL_ROOT_PASSWORD secret
ENV MYSQL_DATABASE ayd2
COPY . /docker-entrypoint-initdb.d/
EXPOSE 3306
