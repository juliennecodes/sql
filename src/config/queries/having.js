import {createSqlExampleConfig} from "../../helpers";

const havingEpisodesMoreThanTwoQuery = `SELECT s.id AS show_id, 
       s.title
FROM shows s
    JOIN episodes e
    ON s.id = e.show_id
GROUP BY s.title, s.id
HAVING COUNT(e.id) > 2` ;

export const havingEpisodesMoreThanTwo = createSqlExampleConfig(
    'Select shows that have more than two episodes',
    havingEpisodesMoreThanTwoQuery,
    [
        `having is a like a where clause after aggregation`,
        `so after rows have been grouped`,
        `apply filter to that group using having`,
        `here episodes are grouped by their show`,
        `after they are grouped, only shows that have more than two records stay in the data set`
    ])