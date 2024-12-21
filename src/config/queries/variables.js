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

const useVariableToUpdateRecordQuery = `SET @futuramaId = (SELECT id FROM shows WHERE title = 'Futurama');

UPDATE shows
SET number_of_seasons = 10
WHERE id = @futuramaId;

SELECT * FROM shows
WHERE id = @futuramaId;`;

const variableWithAssignmentOperatorQuery = `SELECT @futuramaId := id FROM shows WHERE title = 'Futurama';

UPDATE shows
SET number_of_seasons = 10
WHERE id = @futuramaId;

SELECT * FROM shows
WHERE id = @futuramaId;`;

export const useVariableToUpdateRecord = createSqlExampleConfig(
    'Use variable to update record',
    useVariableToUpdateRecordQuery
);

export const variableWithAssignmentOperator = createSqlExampleConfig(
    'Variables with assignment operator',
    variableWithAssignmentOperatorQuery
)
