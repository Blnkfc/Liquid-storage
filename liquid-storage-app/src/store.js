import {create} from "zustand"

export const useStore = create((set) => ({
    foldersList: [
        {
            name: "osu",
            tabs: [
                {
                    tab: {
                        value: "https://osu.ppy.sh/beatmapsets?q=Interstellar%20Re&s=any",
                        id: 0
                    }
                }
            ],
            id: 0
        },
        {
            name: "anime",
            tabs: [
                {
                    tab: {
                        value: "https://animego.org/anime/mastera-mecha-onlayn-2-310",
                        id: 1
                    }
                },
                {
                    tab: {
                        value: "https://osu.ppy.sh/beatmapsets?q=Interstellar%20Re&s=any",
                        id: 0
                    }
                }
            ],
            id: 1
        }
    ],
    addFolder: () => set((state => ({foldersList: state.foldersList.push(newFolder)})))
}))
