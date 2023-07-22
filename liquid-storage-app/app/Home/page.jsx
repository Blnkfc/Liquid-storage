'use client';
import Folder from "@/app/Home/Folder/Folder";
import {useStore} from "@/src/store";
import React, { useState } from 'react';



const Storage = () => {
    const foldersList = useStore((state) => state.foldersList);
    const [folders, setFolders] = useState([]);


    React.useEffect(() => {
        setFolders(
            foldersList.map((F, index) => (
                <Folder key={index} name={F.name} tabs={F.tabs} id={F.id} />
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
            <div className={"storage-list"}>
                <h1>Folders:</h1>
                {folders}
            </div>
            <button className={"storage-add-btn"} onClick={addFolder}  >Add Folder</button>
        </div>
    )
}

export default Storage;