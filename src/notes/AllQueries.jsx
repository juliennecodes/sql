import {Heading} from "../components/Heading";
import {Box, Typography} from "@mui/material";
import {SqlExample} from "../components/SqlExample";
import {seedDataForProductsTable, varietyDatatypesWithProductsTable} from "../config/queries/datatypes";
import {
    allQueries,
    createOrdersTable,
    join,
    groupBy, having, limit, orderBy,
    seedOrdersTable,
    where, from
} from "../config/queries/allQueries";
import {SetupSqlExample} from "../components/SetupSqlExample";
import {getSetupConfig} from "../helpers";
import {Text} from "../components/Text";

export const AllQueries = () => {
    return (
        <Box>
            <Heading>All Queries</Heading>
            <SetupSqlExample config={getSetupConfig('Setup database with product and orders', varietyDatatypesWithProductsTable, seedDataForProductsTable, createOrdersTable, seedOrdersTable)} />
            <SetupSqlExample config={from} />
            <SetupSqlExample config={join} />
            <SetupSqlExample config={where} />
            <SetupSqlExample config={groupBy} />
            <SetupSqlExample config={having} />
            <Typography fontWeight={'bold'}>SELECT</Typography>
            <SetupSqlExample config={orderBy} />
            <SetupSqlExample config={limit} />
            <SqlExample config={allQueries} />
        </Box>
    )
}