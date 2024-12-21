import {SqlExample} from "../components/SqlExample";
import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {selectAllShows, selectAllShowsReleasedLaterThan2000} from "../config/queries/select";

export const SelectRecords = () => {
    return (
        <Box>
            <Heading>Select Records</Heading>
            <SqlExample config={selectAllShows}/>
            <SqlExample config={selectAllShowsReleasedLaterThan2000} />
        </Box>
    )
}