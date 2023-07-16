'use client';


const StorageUnit = (props) => {

    return(
        <li key={props.id}>
            {props.link.value}
        </li>
    )
}

export default StorageUnit;