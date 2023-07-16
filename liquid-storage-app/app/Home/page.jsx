'use client';
import Folder from "@/app/Home/Folder/Folder";
import {useStore} from "@/src/store";
import { TreeView } from '@mui/lab';



const Storage = () => {
    const folders = useStore.getState().foldersList
        .map((F, index) => { return <Folder name={F.name} tabs={F.tabs} id={F.id} />;})
    return(
        <div className={"storage"}>
            <h1>Folders:</h1>
            <ul className={"storage-list"} id={"str-l"}>
                {folders}
            </ul>
            <button className={"storage-add-btn"}>Add Folder</button>
        </div>
    )
}

export default Storage;