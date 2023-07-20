import {create} from "zustand"
import {produce} from "immer"

/*export const immer = config => (set, get) => config(fn => set(produce(fn)), get)*/

export const useStore = create((set) => ({
    foldersList: []
}))
