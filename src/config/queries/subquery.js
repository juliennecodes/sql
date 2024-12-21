import {createSqlExampleConfig} from "../../helpers";

const selectAllShowsWithMoreThanThreeEpisodesQuery = `SELECT t.title, 
       t.number_of_episodes
FROM
    (SELECT s.title, 
            COUNT(e.id) AS number_of_episodes 
     FROM episodes e
         JOIN shows s
         ON e.show_id = s.id
     GROUP BY s.id) t
WHERE t.number_of_episodes >= 3`;

const selectShowsThatHaveMoreThanTwoEpisodesQuery = `SELECT title FROM shows 
             WHERE id IN (
                SELECT show_id FROM episodes 
                               GROUP BY show_id 
                               HAVING COUNT(*) > 2
            );`;

export const selectAllShowsWithMoreThanThreeEpisodes = createSqlExampleConfig(
    'Select all shows with more than three episodes',
    selectAllShowsWithMoreThanThreeEpisodesQuery,
    [
        `subquery creates an ad hoc table from which the outer query can use to get to the desired data set`,
        `here the subquery is getting information from episodes table and grouping the records by their show`,
        `subquery will return`,
        `simpsons 3`,
        `futurama 3`,
        `over the garden wall 2 ...etc`,
        `the outer query uses that information to get shows with more than three episodes`,
        `it makes it clearer if you start the query with a certain dataset`,
        `then slowly add things to pare down the data`,
        `so this query started with getting all episodes`,
        `then they get grouped`,
        `then the count of episodes is added`,
        `then query that ad hoc table`,
        `one of the stumbles was selecting using the ad hoc table name, it wasn’t needed, can just select from the subquery`,
        `then you can further process that ad hoc table by filtering so that only certain data are included, such as number of episodes being 3 or greater`
    ]
);

export const selectShowsThatHaveMoreThanTwoEpisodes = createSqlExampleConfig(
    'Select shows that have more than two episodes',
    selectShowsThatHaveMoreThanTwoEpisodesQuery,
    [
        `in subqueries, you use the result set from the inner query in the outer query`,
        `in this query, the inner query is getting show ids that have more than two episodes`,
        `this will return 1, 2`,
        `the outer query is getting shows where id is in (1, 2)`
    ]
);