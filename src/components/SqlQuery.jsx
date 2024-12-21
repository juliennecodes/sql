import {copyContent} from "../helpers";
import {Box} from "@mui/material";

export const SqlQuery = ({query}) => {
    return (
        <Box sx={{paddingY: 1}}>
            <pre className='sqlQuery' onClick={() => copyContent(query)}>
                <code className='language-sql'>{query}</code>
            </pre>
        </Box>
    )
}