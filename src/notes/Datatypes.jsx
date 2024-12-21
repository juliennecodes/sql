import {Heading} from "../components/Heading";
import {SqlExample} from "../components/SqlExample";
import {
    seedDataForEventsTable,
    seedDataForProductsTable,
    varietyDatatypesWithProductsTable, varietyTimeDatatypes
} from "../config/queries/datatypes";
import {Box} from "@mui/material";
import {SetupSqlExample} from "../components/SetupSqlExample";
import {getSetupConfig} from "../helpers";

export const Datatypes = () => {
    return (
        <Box>
            <Heading>Datatypes</Heading>
            <SqlExample config={varietyDatatypesWithProductsTable} />
            <SetupSqlExample config={getSetupConfig('Seed products table', seedDataForProductsTable)} />
            <SqlExample config={varietyTimeDatatypes} />
            <SetupSqlExample config={getSetupConfig('Seed events table', seedDataForEventsTable)} />
        </Box>
    )
}