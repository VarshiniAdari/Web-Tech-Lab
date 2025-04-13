CREATE DATABASE IF NOT EXISTS event_landing;
USE event_landing;

CREATE TABLE IF NOT EXISTS registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    event_type VARCHAR(50)
);
