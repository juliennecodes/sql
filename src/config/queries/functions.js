import {createSqlExampleConfig} from "../../helpers";

const simpleAverageQuery = `SELECT AVG(number_of_seasons) AS average_seasons 
FROM shows;`;

const averageQuery = `SELECT s.title, 
       AVG(season) AS average_number_of_seasons 
FROM episodes e
    JOIN shows s
    ON e.show_id = s.id
GROUP BY s.title`;

const minQuery = `SELECT s.title, 
       MIN(e.air_date) as earliest_air_date
FROM episodes e
    JOIN shows s
    ON e.show_id = s.id
GROUP BY e.show_id
;`;

const maxQuery = `SELECT s.title, 
       MAX(e.air_date) as latest_air_date
FROM episodes e
    JOIN shows s
    ON e.show_id = s.id
GROUP BY e.show_id
;`;

const lpadQuery = `SELECT s.title, 
       e.title, 
       CONCAT('S', LPAD(e.season, 2, 0), 
              'E', LPAD(e.episode, 2, 0)
       ) AS season_info
FROM episodes e
    JOIN shows s
    ON e.show_id = s.id
;`;

const regexpQuery = `SELECT e.title
FROM episodes e
WHERE e.title REGEXP ('[0-9]+')
;`;

const substringQuery = `SELECT title,
       SUBSTRING_INDEX(title, ' ', -1) AS last_segment
FROM episodes
;`

export const simpleAverage = createSqlExampleConfig(
    'Simple average function',
    simpleAverageQuery,
    [
        `from shows has information on each show and their number of seasons`,
        `in that set, calculate the average number of the number of seasons`
    ]
)

export const average = createSqlExampleConfig(
    'Average function',
    averageQuery,
    [
        `from episodes augment with show information`,
        `group episodes by the shows`,
        `for each of those groups, calculate the average number of seasons`
    ]
)

export const min = createSqlExampleConfig(
    'Min function - earliest air date',
    minQuery,
    [
        `from episodes table, group episodes by the shows`,
        `for each of those groups, calculate which row has the smallest value of air date`,
        `the record that has the smallest value in that group stays`,
        `this returns a row for each show that has the earliest air date`
    ]
)

export const max = createSqlExampleConfig(
    'Max function - latest air date',
    maxQuery,
    [
        `from episodes table, group episodes by the shows`,
        `for each of those groups, calculate which row has the largest value of air date`,
        `the record that has the largest value in that group stays`,
        `this returns a row for each show that has the latest air date`
    ]
);

export const lpad = createSqlExampleConfig(
    'Lpad function',
    lpadQuery,
    [
        `e.season is a value, pad it with 0s to reach 2 places`,
        `so 1 would be 01`,
        `2 would be 02`,
        `values are concatenated`,
        `S + padded season info + E + padded episode info`,
        `S + 01 + E + 02`,
        `so season info would be something like S01E02`
    ]
);

export const regexp = createSqlExampleConfig(
    'Select episodes with numbers in their titles',
    regexpQuery,
    [
        `use for text processing`
    ]
);

export const substring = createSqlExampleConfig(
    'Select last segment of episode title',
    substringQuery,
    [
        `you can use substring function to process a segment of a string`,
        `here the string is the title`,
        `separate the string into segments by giving the delimiter of ' '`,
        `by giving it -1, it will return the last one because -1 starts at the end`
    ]
);
