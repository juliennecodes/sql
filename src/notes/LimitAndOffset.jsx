import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {SqlExample} from "../components/SqlExample";
import {limitResultsToThreeShows, limitResultsToThreeShowsWithOffset} from "../config/queries/limitAndOffset";

export const LimitAndOffset = () => {
    return (
        <Box>
            <Heading>Limit and Offset</Heading>
            <SqlExample config={limitResultsToThreeShows} />
            <SqlExample config={limitResultsToThreeShowsWithOffset} />
        </Box>
    )
}