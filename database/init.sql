CREATE TABLE users
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255)       NOT NULL
);

CREATE TABLE messages
(
    id        SERIAL PRIMARY KEY,
    user_id   INTEGER REFERENCES users (id),
    message   TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
