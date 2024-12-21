import {SqlExample} from "../components/SqlExample";
import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {
    deleteAllEpisodesGivenShowTitleUsingSubquery,
    deleteAllEpisodesGivenShowTitleUsingUsing, deleteAllEpisodesGivenShowTitleWithJoinWithoutUsing, deleteShow
} from "../config/queries/delete";

export const DeleteRecords = () => {
    return (
        <Box>
            <Heading>Delete Records</Heading>
            <SqlExample config={deleteShow} />
            <SqlExample config={deleteAllEpisodesGivenShowTitleUsingSubquery}/>
            <SqlExample config={deleteAllEpisodesGivenShowTitleUsingUsing} />
            <SqlExample config={deleteAllEpisodesGivenShowTitleWithJoinWithoutUsing} />
        </Box>
    )
}