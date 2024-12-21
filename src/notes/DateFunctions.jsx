import {Box} from "@mui/material";
import {SqlExample} from "../components/SqlExample";
import {Heading} from "../components/Heading";
import {monthFunction, yearFunction, yearFunctionB} from "../config/queries/date";



export const DateFunctions = ()  => {
    return (
        <Box>
            <Heading>Date Functions</Heading>
            <SqlExample config={yearFunction} />
            <SqlExample config={yearFunctionB} />
            <SqlExample config={monthFunction} />
        </Box>
    )
}