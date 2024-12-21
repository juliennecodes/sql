import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {SqlExample} from "../components/SqlExample";

import {settingVariables} from "../config/queries/variables";

export const Variables = () => {
    return (
        <Box>
            <Heading>Variables</Heading>
            <SqlExample config={settingVariables} />
        </Box>
    )
}