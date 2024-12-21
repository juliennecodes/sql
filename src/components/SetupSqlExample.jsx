import {Box, Typography} from "@mui/material";
import {SqlQuery} from "./SqlQuery";
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import {Preformatted} from "./Preformatted";
import {CustomTooltip} from "./CustomTooltip";
import {copyContent} from "../helpers";

export const SetupSqlExample = ({config}) => {
    return (
        <Box sx={{paddingY: 1, cursor: 'pointer'}} maxHeight={72} overflow={'scroll'} onClick={() => copyContent(config.query)}>
            {config.title && <Typography sx={{fontWeight: 'bold', color: 'hsl(333, 84%, 62%)'}}>{config.title}</Typography>}
        </Box>
    )
}