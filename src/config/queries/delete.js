import {createSqlExampleConfig} from "../../helpers";

const deleteShowQuery = `DELETE FROM shows
       WHERE title = 'The Simpsons';`;

const deleteAllEpisodesGivenShowTitleUsingSubqueryQuery = `DELETE FROM episodes 
   WHERE show_id = (
        SELECT id FROM shows 
                  WHERE title = 'The Simpsons'
    );`;

const deleteAllEpisodesGivenShowTitleUsingUsingQuery = `DELETE FROM e
    USING episodes e
    JOIN shows s
       ON e.show_id = s.id
       WHERE s.title = 'The Simpsons'
;`;

const deleteAllEpisodesGivenShowTitleWithJoinWithoutUsingQuery = `DELETE e
    FROM episodes e
    JOIN shows s
       ON e.show_id = s.id
       WHERE s.title = 'The Simpsons'
;`;

export const deleteShow = createSqlExampleConfig(
    'Delete show',
    deleteShowQuery
);

export const deleteAllEpisodesGivenShowTitleUsingSubquery = createSqlExampleConfig(
    `Delete all episodes of a given show using subquery`,
    deleteAllEpisodesGivenShowTitleUsingSubqueryQuery
);

export const deleteAllEpisodesGivenShowTitleUsingUsing = createSqlExampleConfig(
    `Delete all episodes of a given show with 'join' and 'using'`,
    deleteAllEpisodesGivenShowTitleUsingUsingQuery,
    [
        `to delete things, where you have to join tables since the filtering clause uses information that isn’t on the table you’re deleting, you have to use USING`,
        `so you specify from which table you’re deleting`,
        `then pare that down to specific rows by adding filters`
    ]
);

export const deleteAllEpisodesGivenShowTitleWithJoinWithoutUsing = createSqlExampleConfig(
    `Delete all episodes of a given show with 'join' without 'using'`,
    deleteAllEpisodesGivenShowTitleWithJoinWithoutUsingQuery,
);