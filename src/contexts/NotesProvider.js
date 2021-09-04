import {React,useState,createContext,useEffect} from "react";
export const NotesProviderContext=createContext();
export const NotesProviderActionContext=createContext();
const NotesProvider=({ children })=>{
    const [state,setState]=useState([]);
    useEffect(()=>{               
     console.log("render provider");     
     console.log(state);       
    },[state])   
    return(
        <NotesProviderContext.Provider value={state}>
            <NotesProviderActionContext.Provider value={setState}>
                {children} 
            </NotesProviderActionContext.Provider>
        </NotesProviderContext.Provider>                   
    )
}
export default NotesProvider;