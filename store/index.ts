import create from 'zustand';


type Store = {
    search: string;
    setSearch: (search: string) => void;
}
export const useStore = create<Store>((set) => ({
    search: '',
    setSearch: (search: string) => set({ search }),
}));