import { Box } from '@material-ui/core';
 import useNotes from "../../hooks/useNotes";
const FullNote=()=>{
     const notes=useNotes();
     console.log("full")
    console.log(useNotes());
    return(
        <Box>
            <h2>Full Note</h2>
        <h2>{notes.length===0?"empty":notes[notes.length-1].title}</h2>
        <hr/>
        <p>{notes.length===0?"empty":notes[notes.length-1].content}</p>
        
        </Box>
    )
}
export default FullNote