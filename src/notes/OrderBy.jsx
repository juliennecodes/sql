import {Box} from "@mui/material";
import {SqlExample} from "../components/SqlExample";
import {Heading} from "../components/Heading";
import {
    selectAllShowsOrderByLatestToOldest,
    selectShowsIncludeTotalNumberOfEpisodesOrderByMostEpisodesToLeast
} from "../config/queries/orderBy";


export const OrderBy = ()  => {
    return (
        <Box>
            <Heading>Order By</Heading>
            <SqlExample config={selectAllShowsOrderByLatestToOldest} />
            <SqlExample config={selectShowsIncludeTotalNumberOfEpisodesOrderByMostEpisodesToLeast} />
        </Box>
    )
}