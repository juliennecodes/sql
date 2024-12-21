import {SqlExample} from "../components/SqlExample";
import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {
    createEpisodesTable,
    createShowsTable,
    createTableWithEnum,
    createTableWithGeneratedColumn
} from "../config/queries/createTable";

export const CreateTable = () => {
    return (
        <Box>
            <Heading>Create Table</Heading>
            <SqlExample config={createShowsTable} />
            <SqlExample config={createEpisodesTable} />
            <SqlExample config={createTableWithEnum} />
            <SqlExample config={createTableWithGeneratedColumn} />
        </Box>
    )
}