import {Box} from "@material-ui/core";
import Note from '../Note/Note';
import '../NoteList/noteList.css';
const NoteList=()=>{
    return(
        <>
        <Box>
        <h3>Note List</h3>
        <Box display="flex" flexWrap="wrap">        
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>

        </Box>
        </Box>
        </>
    )
}
export default NoteList