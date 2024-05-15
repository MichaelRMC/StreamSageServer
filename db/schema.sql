DROP DATABASE IF EXISTS streamsage_dev;
CREATE DATABASE streamsage_dev;

\c streamsage_dev;

CREATE TABLE streaming_service (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	logo TEXT
);

CREATE TABLE title_id (
	id SERIAL PRIMARY KEY,
	watchmode_id INT,
	imdb_id VARCHAR,
	tmdb_id INT,
	tmbd_type TEXT,
	title TEXT NOT NULL,
	year VARCHAR
);

CREATE TABLE person_id (
	id SERIAL PRIMARY KEY,
	watchmode_id INT,
	imdb_id VARCHAR,
	tmdb_id INT
);