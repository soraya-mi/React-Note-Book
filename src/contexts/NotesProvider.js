import {React,useState,createContext,useEffect,useMemo} from "react";
export const NotesProviderContext=createContext();
export const NotesProviderActionContext=createContext();
const NotesProvider=({ children })=>{
    const [notes,setNotes]=useState([]);
    const memoizedNotes = useMemo(() => notes, [notes]);
    useEffect(() => {
        const localStorageNotes = JSON.parse(localStorage.getItem('notes'));
        if (localStorageNotes && localStorageNotes.notes) {
          setNotes(localStorageNotes.notes);
        }
      }, []);  
      useEffect(() => {
        localStorage.setItem('notes', JSON.stringify({ notes: memoizedNotes }));
      }, [memoizedNotes]);
    return(
        <NotesProviderContext.Provider value={memoizedNotes}>
            <NotesProviderActionContext.Provider value={setNotes}>
                {children} 
            </NotesProviderActionContext.Provider>
        </NotesProviderContext.Provider>                   
    )
}
export default NotesProvider;