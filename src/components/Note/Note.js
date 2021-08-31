import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, rgba(254,107,139,0.8) 30%, rgba(255,142,83,0.7) 90%)',
        border: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .9)',
        color: 'white',
        width: 'auto',
        padding: '.3rem .5rem',
        maxWidth: '50%',
      },
  }));
const Note=()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <h3>title</h3>
        <p>content content content  cntcontent content</p>
        </div>
    )
}
export default Note;