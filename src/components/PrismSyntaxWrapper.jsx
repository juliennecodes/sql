import {useEffect} from "react";
import Prism from "prismjs";
import {Box} from "@mui/material";

export const PrismSyntaxWrapper = ({children}) => {
    useEffect(() => {Prism.highlightAll()}, [children])

    return (
        <Box>
            {children}
        </Box>
    )
}