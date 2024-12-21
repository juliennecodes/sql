import {Heading} from "../components/Heading";
import {SqlExample} from "../components/SqlExample";
import {
    seedDataForEventsTable,
    seedDataForProductsTable,
    varietyDatatypesWithProductsTable, varietyTimeDatatypes
} from "../config/queries/datatypes";
import {Box} from "@mui/material";

export const Datatypes = () => {
    return (
        <Box>
            <Heading>Datatypes</Heading>
            <SqlExample config={varietyDatatypesWithProductsTable} />
            <SqlExample config={seedDataForProductsTable} />
            <SqlExample config={varietyTimeDatatypes} />
            <SqlExample config={seedDataForEventsTable} />
        </Box>
    )
}