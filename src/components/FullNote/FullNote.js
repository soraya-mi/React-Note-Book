import { Box,Button } from '@material-ui/core';
// import useNotes from "../../hooks/useNotes";
import useFullNote from "../../hooks/useFullNote";
const FullNote=()=>{
    //  const notes=useNotes();
     const note=useFullNote();
    return(
        <Box width="80%">
            <h3>Full Note</h3>
            <hr />
           <h2>{note.title.length===0?"...":note.title}</h2>
            {/* <h2>{notes.length===0?"empty":notes[notes.length-1].title}</h2> */}
            <hr color="primary"/>
            <p>{note.content.length===0?"...":note.content}</p>
            {/* <p>{notes.length===0?"empty":notes[notes.length-1].content}</p> */}
        </Box>
    )
}
export default FullNote