'use client';
import Folder from "@/app/Home/Folder/Folder";
import {useStore} from "@/src/store";
import React, { useState } from 'react';
import {before} from "cheerio/lib/api/manipulation";


const Storage = () => {
    const foldersList = useStore((state) => state.foldersList);
    const [folders, setFolders] = useState([]);
    const [popupValue, setPopupValue] = useState(false)

   const togglePopup = () => {
        setPopupValue(!popupValue)
   }


    React.useEffect(() => {
        setFolders(
            foldersList.map((F, index) => (
                <Folder key={index} name={F.name} tabs={F.tabs} id={F.id} togglePopup={togglePopup}/>
            ))
        );
    }, [foldersList]);

    const addFolder = () => {
        useStore.setState((state) => ({
            foldersList: [
                ...state.foldersList,
                { name: "Folder", isFolder: true, tabs: [], id: Math.random().toString(36).slice(2, 7) },
            ],
        }));
    };
    return(
        <div className={"storage"}>
            <div className={"storage-dragNDrop"} style={{display: popupValue?"flex":"none",}}>
                <div className={"storage-dragNDrop-background"} onClick={togglePopup}></div>
                <div className="storage-dragNDrop-tabsSaved"></div>
                <div className="storage-dragNDrop-tabsToSave"></div>
            </div>
            <div className={"storage-list"}>
                <h1>Folders:</h1>
                {folders}
            </div>
            <button className={"storage-add-btn"} onClick={addFolder}  >Add Folder</button>
        </div>
    )
}

export default Storage;