# Use the official MySQL image from the Docker Hub
FROM mysql:8.0

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=admin
ENV MYSQL_DATABASE=hexcode
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

# Expose the default MySQL port
EXPOSE 3306

# Add a custom SQL script to initialize the database (optional)
# COPY ./init.sql /docker-entrypoint-initdb.d/

# The default command to run MySQL server
CMD ["mysqld"]