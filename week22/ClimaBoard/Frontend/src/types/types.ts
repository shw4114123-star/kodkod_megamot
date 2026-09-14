import { create } from "zustand"
import UseFetch from "../hooks/UseFetch"


export type City = {
    "id": number,
    "cityName": string,
    "latitude": number,
    "longitude": number,
    "elevation": number,
    "feature_code": string,
    "country_code": string,
    "admin1_id": number,
    "timezone": string,
    "population": number,
    "country_id": number,
    "country": string,
    "admin1": string
}


export type AllData = {
    temperature_2m: number,
    weather_code: number,
    apparent_temperature: number
    wind_speed_10m: number
    time: string
}

interface favoriteType {
    favorites: City[];
    addFavorites: (favorite: City) => void;
    removeFavorites: (favorite: City) => void;
    setFavorites: (cities: City[]) => void;
}

export const useFavoritesStore = create<favoriteType>((set) => ({
    favorites: [],
    addFavorites: (city: City) => set((s) => ({ 
        favorites: [...s.favorites.filter(c => c.id !== city.id), city] 
    })),
    removeFavorites: (city: City) => set((s) => ({ 
        favorites: s.favorites.filter(c => c.id !== city.id) 
    })),
    setFavorites: (cities: City[]) => set({ favorites: cities })
}))