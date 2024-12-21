import {createSqlExampleConfig} from "../../helpers";

const createJsonTableQuery = `CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    profile JSON
);`;

const insertJsonDataQuery = `INSERT INTO users (username, profile)
VALUES ('fry', '{"age": 25, "city": "New York"}');`

const selectValueFromJsonDataMySqlQuery = `SELECT username, 
       JSON_UNQUOTE(JSON_EXTRACT(profile, '$.age')) AS age
FROM users;`;

const selectValueFromJsonDataPsqlQuery = `SELECT username, 
       profile->>'age' AS age
FROM users;`;

export const createJsonTable = createSqlExampleConfig(
    'Create table with json column',
    createJsonTableQuery
);

export const insertJsonData = createSqlExampleConfig(
    'Insert data into json column',
    insertJsonDataQuery
);

export const selectValueFromJsonDataMySql = createSqlExampleConfig(
    'Get value of json property in mysql',
    selectValueFromJsonDataMySqlQuery
);

export const selectValueFromJsonDataPsql = createSqlExampleConfig(
    'Get value of json property in psql',
    selectValueFromJsonDataPsqlQuery
);