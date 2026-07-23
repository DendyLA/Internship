import { apiClient } from "../apiClient.services";
import type {Hero} from "@/services/apiClient/heroes/hero.types"


export const heroService = {
    getHero(id: string){
        return apiClient<Hero>(`/${id}`);
    },
    getBio(id: string){
        return apiClient(`/${id}/biography`)
    },
    getPowerstats(id: string){
        return apiClient(`/${id}/powerstats`)
    },
    getImage(id: string){
        return apiClient(`/${id}/image`)
    }
}