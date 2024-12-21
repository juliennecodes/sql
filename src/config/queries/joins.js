import {createSqlExampleConfig} from "../../helpers";

const selectAllEpisodesIncludeShowTitleQuery = `SELECT s.title, 
       e.title, 
       e.season, 
       e.episode 
FROM episodes e
    JOIN shows s
    ON e.show_id = s.id
;`;

export const selectAllEpisodesIncludeShowTitle = createSqlExampleConfig(
    'Select all episodes include show title',
    selectAllEpisodesIncludeShowTitleQuery,
    [
        `this retrieves all episodes`,
        `each row has to be augmented with information that doesn’t exist on episode table`,
        `so join that rows that match episode’s show id`,
        `joining will join that row with show row`,
        `you don’t need all show columns, therefore, just keep the show title as part of the last assembled dataset`
    ])