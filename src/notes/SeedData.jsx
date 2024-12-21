import {Box} from "@mui/material";
import {SetupSqlExample} from "../components/SetupSqlExample";
import {createEpisodesTable, createShowsTable} from "../config/queries/createTable";
import {getSetupConfig} from "../helpers";
import {insertIntoEpisodes, insertIntoShows} from "../config/queries/insert";
import {
    seedDataForEventsTable,
    seedDataForProductsTable,
    varietyDatatypesWithProductsTable,
    varietyTimeDatatypes
} from "../config/queries/datatypes";
import {createOrdersTable, seedOrdersTable} from "../config/queries/allQueries";

export const SeedData = ()  => {
    return (
        <Box>
            <SetupSqlExample config={getSetupConfig('Setup database with shows and episodes', createShowsTable, insertIntoShows, createEpisodesTable, insertIntoEpisodes)} />
            <SetupSqlExample config={getSetupConfig('Setup database with product and orders', varietyDatatypesWithProductsTable, seedDataForProductsTable, createOrdersTable, seedOrdersTable)} />
            <SetupSqlExample config={getSetupConfig('Setup database with events', varietyTimeDatatypes, seedDataForEventsTable)} />
        </Box>
    )
}