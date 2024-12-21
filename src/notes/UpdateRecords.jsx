import {SqlExample} from "../components/SqlExample";
import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {updateMultipleColumns, updateNumberOfSeasons} from "../config/queries/update";

export const UpdateRecords = () => {
    return (
        <Box>
            <Heading>Update Records</Heading>
            <SqlExample config={updateNumberOfSeasons}/>
            <SqlExample config={updateMultipleColumns} />
        </Box>
    )
}