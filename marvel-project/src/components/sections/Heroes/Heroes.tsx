'use client'

import {useEffect, useState} from 'react'
import HeroesList from './HeroesList/HeroesList'
import HeroDescription from './HeroDescription/HeroDescription'
import {heroService} from '@/services/heroes/hero.services'
import type { Hero } from '@/services//heroes/hero.types'

export default function Heroes(){
    const [heroes, setHeroes] = useState<Hero[]>([])
    const [selectedHero, setSelectedHero] = useState<Hero | null>(null)
    const loadHeroes = async () => {
        try {
            const heroesArray: Hero[] = []
            for (let id=1; id<=9; id++){
                const hero = await heroService.getHero(String(id));
                heroesArray.push(hero)
            }
            setHeroes(heroesArray)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        loadHeroes()
    }, [])
    return (
        <section className="flex justify-between my-12.5">
            <HeroesList heroes={heroes} onSelectHero={setSelectedHero}/>
            <HeroDescription hero={selectedHero}/>
        </section>
    )
}
