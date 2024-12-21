import {Box, List, ListItem} from "@mui/material";
import {NavLink, Route, Routes} from "react-router-dom";
import {navigationConfig} from "./config/navigationConfig";
import {useEffect} from "react";
import Prism from 'prismjs';
import {PrismSyntaxWrapper} from "./components/PrismSyntaxWrapper";
import {SeedData} from "./notes/SeedData";

const Navigation = ({config}) => {
    return (
        <nav id='sidebar'>
            <List>
                {config.map((topic) => <ListItem key={topic.url}>
                    <NavLink to={`${topic.url}`}>{topic.title}</NavLink>
                </ListItem>)}
            </List>
        </nav>
    );
};
function App() {
    useEffect(() => {Prism.highlightAll()}, [])
    return (
        <Box className='app'>
            <Navigation config={navigationConfig}/>
            <Box id='mainContent'>
                <Routes>
                    <Route path='/' element={<PrismSyntaxWrapper><SeedData /></PrismSyntaxWrapper>}></Route>
                    {navigationConfig.map((topic) => <Route
                        key={topic.title}
                        path={topic.url}
                        element={<PrismSyntaxWrapper>{topic.jsxElement}</PrismSyntaxWrapper>}></Route>)}
                </Routes>
            </Box>
        </Box>
    );
}

export default App;
