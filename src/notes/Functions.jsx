import {Box} from "@mui/material";
import {SqlExample} from "../components/SqlExample";
import {Heading} from "../components/Heading";
import {average, lpad, max, min, regexp, simpleAverage, substring} from "../config/queries/functions";

export const Functions = () => {
    return (
        <Box>
            <Heading>Functions</Heading>
            <SqlExample config={simpleAverage} />
            <SqlExample config={average} />
            <SqlExample config={min} />
            <SqlExample config={max} />
            <SqlExample config={regexp} />
            <SqlExample config={substring} />
            <SqlExample config={lpad} />
        </Box>
    )
}