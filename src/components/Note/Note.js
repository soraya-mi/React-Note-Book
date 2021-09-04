import React from "react";
import { makeStyles ,Button,Typography} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, rgba(254,107,139,0.8) 30%, rgba(255,142,83,0.7) 90%)',
        border: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .9)',
        color: 'white',
        height: 'auto',
        padding: '.5rem .9rem',
        minWidth: '5rem',
      },
  }));

const Note=(Props)=>{
    const classes = useStyles();
    return(
        <div className={classes.root} >
        <Button size="small" color="default">Edit</Button>
        <Button size="small" color="secondary" onClick={Props.Delete}>Delete</Button>
        <Typography variant="h6">{Props.title}</Typography>
        <hr color="primary"/>
        <p>{Props.content}</p>
        </div>
    )
}
export default Note;