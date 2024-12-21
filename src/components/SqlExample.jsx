import {Box, Typography} from "@mui/material";
import {SqlQuery} from "./SqlQuery";
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import {Preformatted} from "./Preformatted";
import {CustomTooltip} from "./CustomTooltip";

const Notes = ({notes}) => {
    const tooltipContent = <Box sx={{paddingX: 2, paddingY: 1}}>
        {notes.map((line, index) => {
            return <Preformatted key={index}>{line}</Preformatted>
        })}
    </Box>;

    return (
        <CustomTooltip title={tooltipContent} placement='right-start'>
            <NotesRoundedIcon cursor='help'/>
        </CustomTooltip>
    )
}

export const SqlExample = ({config}) => {
    return (
        <Box sx={{paddingY: 1}}>
            {config.title && <Typography sx={{fontWeight: 'bold'}}>{config.title}</Typography>}
            <SqlQuery query={config.query}/>
            {config.notes && config.notes.length > 0 &&
                config.notes.map((note, index) =>
                    <Box key={index}><Notes notes={note}/></Box>)
            }
        </Box>
    )
}