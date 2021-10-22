DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

DROP TABLE IF EXISTS movie_names;
CREATE TABLE movie_nameS (
    id INT NOT NULL,
    movie_name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS movie_reviews;
create table movie_reviews (
    id INT NOT NULL,
    movie_review TEXT
);

