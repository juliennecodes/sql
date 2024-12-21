import {styled, Tooltip, tooltipClasses} from "@mui/material";
import * as React from "react";

export const CustomTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: '540px',
        backgroundColor: 'hsl(224, 18%, 25%)',
    },
});