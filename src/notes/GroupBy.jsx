import {Box} from "@mui/material";
import {SqlExample} from "../components/SqlExample";
import {Heading} from "../components/Heading";
import {selectAllShowsIncludeTotalNumberOfEpisodes} from "../config/queries/groupBy";

export const GroupBy = () => {
    return (
        <Box>
            <Heading>Group By</Heading>
            <SqlExample config={selectAllShowsIncludeTotalNumberOfEpisodes} />
        </Box>
    )
}