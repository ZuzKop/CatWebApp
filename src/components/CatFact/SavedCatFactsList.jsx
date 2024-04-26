import { Box } from "@mui/material";
import ExpandContent from '../ExpandContent/ExpandContent'

const SavedCatFacts = ({savedCatFacts}) => {
    const content = savedCatFacts.map((fact, index) => <span key={index}>{fact}</span>);

    return (
        <Box>
            <ExpandContent content={content} title="Bookmarked Facts"></ExpandContent>
             
        </Box>
    )
}
export default SavedCatFacts;