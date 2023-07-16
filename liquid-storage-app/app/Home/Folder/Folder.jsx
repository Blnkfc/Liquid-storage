'use client';
import StorageUnit from "@/app/Home/Folder/StorageUnit/StorageUnit";
import {useStore} from "@/src/store";
import {useState} from "react"



const Folder = (props) =>{
    let state = useStore.getState().foldersList[props.id]
    let tabs =  state.tabs
        .map((L, index) => <StorageUnit link={L.tab} id={L.tab.id}/>)

    const [expand, setExpand] = useState(false)

 /*   const tabs = props.tabs
        .map((L, index) => <StorageUnit link={L.tab} id={index}/>)*/
    return(
           <div className={"folder"}>
               <span className={"folder-name"} onClick={()=>setExpand(!expand)}  >{props.name}</span>
               <ul className={"folder-list"} style={{display: expand?"block":"none"}}>
                   {tabs}
                   <li key={"folder-btn-"+props.id}>
                        <button className={"folder-add-btn"}>
                           add link
                       </button>
                   </li>
               </ul>

           </div>
    )
}

export default Folder;