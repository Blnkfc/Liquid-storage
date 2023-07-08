import {create} from "zustand"

export const useStore = create((set) => ({
    foldersList: [
        {
            name:"",
            tabs:[
                {tab: ""}
            ],
            id: 0
        }
    ],
    addFolder: () => set((state => ({foldersList: state.foldersList.push(newFolder)})))
}))
