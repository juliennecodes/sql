import {createSqlExampleConfig} from "../../helpers";

const selectShowsIncludeTotalNumberOfEpisodesOrderByMostEpisodesToLeastQuery = `SELECT s.title, 
       COUNT(*) as number_of_episodes
FROM episodes e
    JOIN shows s
    ON e.show_id = s.id
GROUP BY e.show_id
ORDER BY number_of_episodes DESC`;

const selectAllShowsOrderByLatestToOldestQuery = `SELECT * FROM shows 
         ORDER BY release_year DESC;`;

export const selectAllShowsOrderByLatestToOldest = createSqlExampleConfig(
    'Select all shows order by latest to oldest',
    selectAllShowsOrderByLatestToOldestQuery
);

export const selectShowsIncludeTotalNumberOfEpisodesOrderByMostEpisodesToLeast = createSqlExampleConfig(
    'Select shows include total number of episodes order by most episodes to least',
    selectShowsIncludeTotalNumberOfEpisodesOrderByMostEpisodesToLeastQuery
);