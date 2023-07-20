'use client';

import Title from "@/app/Home/Folder/StorageUnit/Title";

export default  function StorageUnit(props){
    const pullIcon = "https://www.google.com/s2/favicons?domain="+props.link.value
    return(
        <li key={props.id} className={"storage-unit"}>
            <a href={props.link.value}>
                <img src={pullIcon} alt=""/>
                <span>{props.link.value}</span>
            </a>
        </li>
    )
}

