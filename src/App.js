import './App.css';
import {AppBar, Toolbar, Typography,Grid} from '@material-ui/core';
import NewNote from './components/NewNote/NewNote';
import NoteList from './components/NoteList/NoteList';
import FullNote from './components/FullNote/FullNote';
import NotesProvider  from './contexts/NotesProvider';
import FullNoteProvider from './contexts/FullNoteProvider';
function App() {
  return (
    <div className="App">
      <AppBar position='static' color='secondary'>
         <Toolbar>
             <Typography variant="h6" >Note Book App</Typography>
         </Toolbar>
      </AppBar>
      <NotesProvider>
      <FullNoteProvider>
      <Grid container direction="row" justifyContent="center">
        <Grid container item xs={3} spacing={3} >
          <NewNote/>
        </Grid>
        <Grid container item xs={3} spacing={3} >
         
          <FullNote/>
          
        </Grid>
        <Grid container item xs={6} spacing={3}>
          <NoteList/>
        </Grid>        
      </Grid>
      </FullNoteProvider>
      </NotesProvider>
    </div>
  );
}
export default App;