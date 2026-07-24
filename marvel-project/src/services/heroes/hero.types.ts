export type Hero={ 
    id: string | number; 
    name: string; 
    powerstats: Power, 
    biography: HeroBio, 
    image: Image, 
 
} 
 
type Power={ 
    intelligence: string, 
    strength: string, 
    speed:string, 
    durability:string, 
    power:string, 
    combat:string, 
} 
 
type HeroBio={ 
    'full-name': string, 
    'alter-egos'?: string, 
    'aliases': string, 
    'place-of-birth': string, 
    'first-appearance': string, 
    'publisher': string, 
    'alignment': string, 
} 
 
type Image={ 
    url: string, 
}