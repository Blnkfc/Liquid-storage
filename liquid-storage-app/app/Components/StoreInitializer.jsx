'use client';

import {useStore} from "@/src/store"

import {useRef} from "react";


function StoreInitializer ({foldersList}) {
    const initialized = useRef(false)
    if (!initialized.current) {
        useStore.setState({foldersList});
        initialized.current = true ;
    }
    return null;
}
export default StoreInitializer