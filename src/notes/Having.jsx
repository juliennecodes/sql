import {Box} from "@mui/material";
import {SqlExample} from "../components/SqlExample";
import {Heading} from "../components/Heading";
import {havingEpisodesMoreThanTwo} from "../config/queries/having";

export const Having = () => {
    return (
        <Box>
            <Heading>Having</Heading>
            <SqlExample config={havingEpisodesMoreThanTwo} />
        </Box>
    )
}