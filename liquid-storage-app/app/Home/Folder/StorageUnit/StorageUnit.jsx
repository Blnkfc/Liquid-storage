'use client';

const StorageUnit = (props) => {

    console.log(props.link.value)

    return(
        <div>
            <a href={props.link.value}>{props.link.value}</a>
        </div>
    )
}

export default StorageUnit;