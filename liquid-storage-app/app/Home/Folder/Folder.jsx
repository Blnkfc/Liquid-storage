import StorageUnit from "@/app/Home/Folder/StorageUnit/StorageUnit";

const Folder = () =>{
    return(
        <div className={"folder"}>
            <input type="checkbox" id="list-item-1"/>
            <label htmlFor="list-item-1" className="folder-unit">Folder name</label>
            <ul className={"folder-list"}>
                <li>
                    <StorageUnit />
                </li>
                <li>
                    <button className={"folder-add-btn"}>
                        add link
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Folder;