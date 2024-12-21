import {createSqlExampleConfig} from "../../helpers";

const updateNumberOfSeasonsQuery = `UPDATE shows 
    SET number_of_seasons = 10 
    WHERE title = 'Futurama';`
;

const updateMultipleColumnsQuery = `SET @episode_id = (SELECT id FROM episodes WHERE title = 'Space Pilot 3000');

UPDATE episodes
SET title = 'Space Pilot 4000',
    air_date = '2000-03-28'
WHERE id = @episode_id;

SELECT * FROM episodes
WHERE id = @episode_id;`;

export const updateNumberOfSeasons = createSqlExampleConfig('Update number of seasons', updateNumberOfSeasonsQuery);
export const updateMultipleColumns = createSqlExampleConfig('Update multiple columns', updateMultipleColumnsQuery);