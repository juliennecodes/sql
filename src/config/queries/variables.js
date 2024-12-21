import {createSqlExampleConfig} from "../../helpers";

export const settingVariablesQuery = `SET @total_shows = (SELECT COUNT(*) FROM shows);
SET @total_episodes = (SELECT COUNT(*) FROM episodes);


SELECT 
    @total_shows AS total_shows,
    @total_episodes AS total_episodes;`;

export const settingVariables = createSqlExampleConfig(
    'Using variables',
    settingVariablesQuery,
    [
        `assign values to variables using SET`,
        `variables are used for storing intermediary values`,
        `these can be used to simplify complex queries or reusing values in a query`
    ]
);