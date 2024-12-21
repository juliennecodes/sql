import {createSqlExampleConfig} from "../../helpers";

const insertIntoShowsQuery = `INSERT IGNORE INTO shows (title, release_year, number_of_seasons)
VALUES
    ('The Simpsons', 1989, 33),
    ('Futurama', 1999, 9),
    ('Over the Garden Wall', 2014, 1),
    ('Avatar: The Last Airbender', 2005, 3),
    ('South Park', 1997, 25);
`;

const insertIntoEpisodesQuery = `INSERT IGNORE INTO episodes (show_id, title, air_date, season, episode) 
VALUES
    (1, 'Simpsons Roasting on an Open Fire', '1989-12-17', 1, 1),
    (1, 'Bart the Genius', '1990-01-14', 1, 2),
    (1, 'Thirty Minutes Over Tokyo', '1999-05-16', 10, 26),
    (2, 'Space Pilot 3000', '1999-03-28', 1, 1),
    (2, 'The Series Has Landed', '1999-04-04', 1, 2),
    (4, 'Leela''s Homeworld', '2002-02-17', 4, 2),
    (3, 'The Old Grist Mill', '2014-11-03', 1, 1),
    (3, 'Hard Times at the Huskin Bee', '2014-11-03', 1, 5),
    (4, 'The Boy in the Iceberg', '2005-02-21', 1, 1),
    (4, 'The Avatar Returns', '2005-02-21', 1, 2),
    (5, 'Cartman Gets an Anal Probe', '1997-08-13', 1, 1),
    (5, 'Weight Gain 4000', '1997-08-20', 1, 2);
`;

export const insertIntoShows = createSqlExampleConfig('Insert into shows', insertIntoShowsQuery);
export const insertIntoEpisodes = createSqlExampleConfig('Insert into episodes', insertIntoEpisodesQuery);