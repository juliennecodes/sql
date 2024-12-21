import {createSqlExampleConfig} from "../../helpers";

export const selectAllShowsQuery = `SELECT * FROM shows;`;

export const selectAllShowsReleasedLaterThan2000Query = `SELECT * FROM shows
         WHERE release_year > 2000`;

export const selectAllShows = createSqlExampleConfig(
    'Select all shows',
    selectAllShowsQuery
);

export const selectAllShowsReleasedLaterThan2000 = createSqlExampleConfig(
    'Select all shows released later than 2000',
    selectAllShowsReleasedLaterThan2000Query
);