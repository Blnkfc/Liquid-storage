'use client';
import StorageUnit from "@/app/Home/Folder/StorageUnit/StorageUnit";
import {useStore} from "@/src/store";
import React, {useState} from 'react';


const Folder = (props) =>{

    /*  INITIALIZING STATE AND MATCHING IDS OF FOLDERS  */
    const foldersList = useStore((state) => state.foldersList)
    const indexOfObject = foldersList.findIndex(object => {
        return object.id === props.id;
    });
    const folderData = useStore((state) => state.foldersList[indexOfObject]);
    const tabsList = folderData?.tabs || [];
    const [tabs, setTabs] = useState([])
    React.useEffect(() => {
        setTabs(
            tabsList.map((L, index) => <StorageUnit key={index} link={L.tab} id={L.tab.id}/>))
    },[tabsList])



    /*  DELETE FOLDER FUNCTION  */
    const deleteFolder = () => {
        useStore.setState((state) => {
            const foldersList = [...state.foldersList];
            if (foldersList[indexOfObject] && foldersList[indexOfObject].tabs) {
                foldersList[indexOfObject].tabs = [];
                foldersList.splice(indexOfObject, 1);
            }
            return { foldersList };
        });
    }

    /*  ADD LINK FUNCTION  */
    const [popUp, setPopUp] = useState(false)
    const addLInk = () => {

    }

    /*  POPUP TOGGLING FUNCTION  */
    const handleToggle = () => {
        props.togglePopup()
    }


    /*  FOLDER EXPANDING STATE  */
    const [expand, setExpand] = useState(false)


    return(
           <div className={"folder"}
                style={{
                    border: expand ? "solid 3px #0066ff" : "none" ,
                    background: expand ? "#61a0ff" : "transparent"
                }} >
               <div style={{background: expand ? "#2d7df7" : "transparent" }} >
                   <span className={"folder-name"}
                         onClick={()=>setExpand(!expand)}
                         > {props.name} </span>
                   <button className={"folder-delete-btn"} onClick={deleteFolder} >Delete</button>
               </div>
               <ul className={"folder-list"}
                   style={{display: expand?"block":"none"}}>
                   {tabs}
                   <li key={"folder-list-btn-"+props.id}>
                        <button className={"folder-list-btn"} onClick={handleToggle}>
                           Add Link
                       </button>
                   </li>
               </ul>
           </div>
    )
}

export default Folder;