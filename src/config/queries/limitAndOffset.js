import {createSqlExampleConfig} from "../../helpers";

const limitResultsToThreeShowsQuery = `SELECT * FROM shows 
    LIMIT 3
;`

const limitResultsToThreeShowsWithOffsetQuery = `SELECT * FROM shows 
    LIMIT 3
    OFFSET 3
;`

export const limitResultsToThreeShows = createSqlExampleConfig(
    'Retrieve shows and limit it to three',
    limitResultsToThreeShowsQuery
);

export const limitResultsToThreeShowsWithOffset = createSqlExampleConfig(
    'Retrieve shows and limit it to three and offset the results to get the next batch',
    limitResultsToThreeShowsWithOffsetQuery,
    [
        `offset is used for pagination`,
        `user specifies the page size, which corresponds to the number of records to return`,
        `user also specifies the page`,
        `however, page has to be calculated by the application and the result is calculated taking into account page size`,
        `offset = (page - 1) * pageSize`],
    [
        `so if user specifies they want to be on page 1 where pageSize is 10`,
        `offset is (1 - 1) * 10`,
        `0 * 10`,
        `offset 0`,
        `this will return the first ten records`],
    [
        `if user wants to be on page 2`,
        `offset is (2 - 1) * 10`,
        `1 * 10`,
        `offset 10`,
        `this will skip the first ten records and return the ten records after that`]
)
;