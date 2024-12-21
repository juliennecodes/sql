import {createSqlExampleConfig} from "../../helpers";

const yearQueryA = `SELECT * FROM episodes
         WHERE YEAR(air_date) = 1999;`;

const yearQueryB = `SELECT s.title AS show_title,
       e.title AS episode
FROM episodes e
    JOIN shows s
    ON e.show_id = s.id
WHERE YEAR(e.air_date) > 1999
;`;

const monthQuery = `SELECT * FROM episodes
         WHERE MONTH(air_date) = 12
;`;

export const yearFunction = createSqlExampleConfig('Select all episodes that aired in 1999', yearQueryA)

export const yearFunctionB = createSqlExampleConfig('Select all episodes that aired after 1999', yearQueryB);

export const monthFunction = createSqlExampleConfig('Select all episodes that aired in December', monthQuery);