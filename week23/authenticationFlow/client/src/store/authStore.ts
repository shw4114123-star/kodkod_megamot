import { create } from "zustand"

export type User = {
    _id: string,
    userName: string,
    email: string,
    createdAt: string
}

type Data = {
    token: string,
    email: string
}

interface tokenType {
    token: string,
    addToken: (data: Data) => void
}

export const useToken = create<tokenType>((set) => ({
    token: "",
    addToken: (data: Data) => set({ token: data.token })
}))