
import Folder from "@/app/Home/Folder/Folder";

const Storage = () => {
    return(
        <div className={"storage"}>
            <h1>Folders:</h1>
            <ul className={"storage-list"}>
                <li>
                    <Folder />
                </li>
            </ul>
            <button className={"storage-add-btn"}>Add Folder</button>
        </div>
    )
}

export default Storage;