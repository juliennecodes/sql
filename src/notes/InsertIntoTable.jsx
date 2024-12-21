import {SqlExample} from "../components/SqlExample";
import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {insertIntoEpisodes, insertIntoShows} from "../config/queries/insert";

export const InsertIntoTable = () => {
    return (
        <Box>
            <Heading>Insert Into Table</Heading>
            <SqlExample config={insertIntoShows}/>
            <SqlExample config={insertIntoEpisodes} />
        </Box>
    )
}