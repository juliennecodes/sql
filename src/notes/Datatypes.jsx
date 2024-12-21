import {Heading} from "../components/Heading";
import {SqlExample} from "../components/SqlExample";
import {varietyDatatypes} from "../config/queries/datatypes";
import {Box} from "@mui/material";

export const Datatypes = () => {
    return (
        <Box>
            <Heading>Datatypes</Heading>
            <SqlExample config={varietyDatatypes} />
        </Box>
    )
}