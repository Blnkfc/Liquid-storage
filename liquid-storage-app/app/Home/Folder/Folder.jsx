'use client';
import StorageUnit from "@/app/Home/Folder/StorageUnit/StorageUnit";
import {useStore} from "@/src/store";



const Folder = (props) =>{
    const tabs = props.tabs
        .map((L, index) => <li key={index}><StorageUnit link={L.tab} /> </li>)
    return(
        <div className={"folder"}>
            <input type="checkbox" id="list-item-1"/>
            <label htmlFor="list-item-1" className="folder-unit">{props.name}</label>
            <ul className={"folder-list"}>
                    {tabs}
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