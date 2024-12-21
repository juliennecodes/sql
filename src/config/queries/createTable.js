import {createSqlExampleConfig} from "../../helpers";

export const createShowsTableQuery = `CREATE TABLE shows (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    release_year INT,
    number_of_seasons INT
);`

export const createEpisodesTableQuery = `CREATE TABLE episodes (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    show_id INT,
    title VARCHAR(100),
    air_date DATE,
    season INT,
    episode INT,
    FOREIGN KEY (show_id) REFERENCES shows(id)
);
`;

const createTableWithEnumQuery = `CREATE TABLE orders (
    id  INT
        PRIMARY KEY
        AUTO_INCREMENT,
    size ENUM('small', 'medium', 'large')
);`

const createTableWithGeneratedColumnQuery = `CREATE TABLE emails (
  email varchar(255),
  domain varchar(255) AS (substring_index(email, '@', -1))
);`

export const createShowsTable = createSqlExampleConfig('Create shows table', createShowsTableQuery);

export const createEpisodesTable =createSqlExampleConfig('Create episodes table', createEpisodesTableQuery);

export const createTableWithEnum = createSqlExampleConfig('Create orders table using ENUM datatype', createTableWithEnumQuery,
    [`enums look like strings but are stored as integers`,
        `0 is specified for invalid data`, `here, 1 is small`,
        `2 is medium`, `3 is large`,
        `they get sorted by their underlying integer value`]
);

export const createTableWithGeneratedColumn = createSqlExampleConfig('Create emails table with generated column', createTableWithGeneratedColumnQuery);