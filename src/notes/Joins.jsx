import {Box} from "@mui/material";
import {SqlExample} from "../components/SqlExample";
import {Heading} from "../components/Heading";
import {selectAllEpisodesIncludeShowTitle} from "../config/queries/joins";

export const Joins = () => {
    return (
        <Box>
            <Heading>Joins</Heading>
            <SqlExample config={selectAllEpisodesIncludeShowTitle}/>
        </Box>
    )
}