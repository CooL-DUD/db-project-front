create TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255)
);
create TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    rating DECIMAL(2, 1),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
create TABLE comments (
    id SERIAL PRIMARY KEY,
    text TEXT,
    user_id INTEGER,
    game_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
);