import Folder from "@/app/Home/Folder/Folder";
import {useStore} from "@/src/store";



const Storage = () => {
    const folders = useStore.getState().foldersList
        .map((F, index) => { return <li key={index} ><Folder name={F.name} tabs={F.tabs} id={F.id} /></li>;})

    return(
        <div className={"storage"}>
            <h1>Folders:</h1>
            <ul className={"storage-list"}>
                {folders}
            </ul>
            <button className={"storage-add-btn"}>Add Folder</button>
        </div>
    )
}

export default Storage;