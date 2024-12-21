import {Box} from "@mui/material";
import {Heading} from "../components/Heading";
import {SqlExample} from "../components/SqlExample";

import {settingVariables, useVariableToUpdateRecord, variableWithAssignmentOperator} from "../config/queries/variables";

export const Variables = () => {
    return (
        <Box>
            <Heading>Variables</Heading>
            <SqlExample config={settingVariables} />
            <SqlExample config={useVariableToUpdateRecord} />
            <SqlExample config={variableWithAssignmentOperator} />
        </Box>
    )
}