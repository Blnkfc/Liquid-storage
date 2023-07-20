'use client';
import StorageUnit from "@/app/Home/Folder/StorageUnit/StorageUnit";
import {useStore} from "@/src/store";
import React, { useState } from 'react';



const Folder = (props) =>{
    let state = useStore.getState().foldersList[props.id]
 /*   const [tabs, setTabs] = useState([])*/

    /*React.useEffect(() => {
        setTabs(state.tabs
            .map((L, index) => <StorageUnit key={index} link={L.tab} id={L.tab.id}/>))
    },[tabs])*/

    const tabs = state.tabs
        .map((L, index) => <StorageUnit key={index} link={L.tab} id={L.tab.id}/>)

    const deleteFolder = () => {
            useStore.setState((state) => ({
                foldersList: [
                    ...state.foldersList.splice(props.id, 1)
                ]
            }))
    }


    const [expand, setExpand] = useState(false)

    /*const tabs = props.tabs
        .map((L, index) => <StorageUnit link={L.tab} id={index}/>)*/
    return(
           <div className={"folder"}>
               <div>
                   <span className={"folder-name"}
                         onClick={()=>setExpand(!expand)}
                         style={{
                             background: expand ? "#61a0ff" : "transparent",
                             border: expand ? "solid 3px #0066ff" : "none" }} >{state.name}</span>
                   <button className={"folder-delete-btn"} onClick={deleteFolder} >Delete</button>
               </div>
               <ul className={"folder-list"}
                   style={{display: expand?"block":"none"}}>
                   {tabs}
                   <li key={"folder-list-btn-"+props.id}>
                        <button className={"folder-list-btn"}>
                           Add Link
                       </button>
                   </li>
               </ul>

           </div>
    )
}

export default Folder;