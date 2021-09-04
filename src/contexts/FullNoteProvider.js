import {React,useState,createContext,useEffect,useMemo} from "react";
export const FullNoteProviderContext=createContext();
export const FullNoteProviderActionContext=createContext();
const FullNoteProvider=({ children })=>{
    const [fullnote,setfullNote]=useState({id:'',title:'',content:''});
    const memoizedFullNote = useMemo(() => fullnote, [fullnote]);
    useEffect(() => {
        const localStorageNotes = JSON.parse(localStorage.getItem('fullNote'));
        if (localStorageNotes && localStorageNotes.fullNote) {
          setfullNote(localStorageNotes.fullNote);
        }
      }, []);  
      useEffect(() => {
        localStorage.setItem('fullNote', JSON.stringify({ fullNote: memoizedFullNote }));
      }, [memoizedFullNote]);
    return(
        <FullNoteProviderContext.Provider value={memoizedFullNote}>
            <FullNoteProviderActionContext.Provider value={setfullNote}>
                {children} 
            </FullNoteProviderActionContext.Provider>
        </FullNoteProviderContext.Provider>                   
    )
}
export default FullNoteProvider;