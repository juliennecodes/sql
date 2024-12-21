import {Box} from "@mui/material";
import {SqlExample} from "../components/SqlExample";
import {
    createJsonTable,
    insertJsonData,
    selectValueFromJsonDataMySql,
    selectValueFromJsonDataPsql
} from "../config/queries/jsonQueries";

export const Json = () => {
    return (
        <Box>
            <SqlExample config={createJsonTable} />
            <SqlExample config={insertJsonData} />
            <SqlExample config={selectValueFromJsonDataMySql} />
            <SqlExample config={selectValueFromJsonDataPsql} />
        </Box>
    )
}