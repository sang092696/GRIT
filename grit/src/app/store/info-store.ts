import { createStore } from 'zustand/vanilla'

export type InfoState = {
    name: string,
    career: string,
    email: string,
    admissionYear: string,
    prioritySchools: string[],
}

export type InfoActions = {
    setName: (name: string) => void;
    setCareer: (career: string) => void;
    setEmail: (email: string) => void;
    setAdmissionYear: (year: string) => void;
    setPrioritySchools: (schools: string[]) => void;
};

export type InfoStore = InfoState & InfoActions

export const defaultInitState: InfoState ={
    name: "",
    career: '',
    email: '',
    admissionYear: '',
    prioritySchools: ['']
}

export const createInfoStore =(
    initState: InfoState = defaultInitState,
) =>{
    return createStore<InfoStore>()((set) => ({
        ...initState,
        setName: (name: string) => set((state) => ({ ...state, name })),
        setCareer: (career: string) => set((state) => ({ ...state, career })),
        setEmail: (email: string) => set((state) => ({ ...state, email })),
        setAdmissionYear: (year: string) => set((state) => ({ ...state, admissionYear: year })),
        setPrioritySchools: (schools: string[]) => set((state) => ({ ...state, prioritySchools: schools })),
    }));
}