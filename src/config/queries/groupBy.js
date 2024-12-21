import {createSqlExampleConfig} from "../../helpers";

const selectAllShowsIncludeTotalNumberOfEpisodesQuery = `SELECT s.id AS show_id, 
       s.title, 
       COUNT(e.id) AS total_episodes 
FROM shows s
    JOIN episodes e
    ON s.id = e.show_id
GROUP BY s.title, s.id`;

export const selectAllShowsIncludeTotalNumberOfEpisodes = createSqlExampleConfig(
    'Select all shows include total number of episodes',
    selectAllShowsIncludeTotalNumberOfEpisodesQuery,
    [
        `when you do group by, every column that is not aggregated must be included`,
        `group by finds the rows that have the same value for the column and groups them`,
        `the primary purpose of group by is to aggregate data in meaningful ways, such as counting, summing, or averaging values within each group.`,
        `the aggregate function will operate on a single group, thus giving the result`,
        `not confirmed but maybe a good way to visualize this is to select the rows`,
        `then when you do group by, they get separated into their own little groups`,
        `then the aggregate function count operates on that single group`,
        `then the groups, which are reduced to one single row, are brought back together again`
    ])