import {SqlExample} from "../components/SqlExample";
import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {
    selectAllShowsWithMoreThanThreeEpisodes,
    selectShowsThatHaveMoreThanTwoEpisodes
} from "../config/queries/subquery";

export const Subquery = () => {
    return (
        <Box>
            <Heading>Subquery</Heading>
            <SqlExample config={selectShowsThatHaveMoreThanTwoEpisodes} />
            <SqlExample config={selectAllShowsWithMoreThanThreeEpisodes} />
        </Box>
    )
}