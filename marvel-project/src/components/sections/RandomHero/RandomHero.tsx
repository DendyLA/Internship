'use client'


import RandomHeroInfo from "@/components/sections/RandomHero/RandomHeroInfo/RandomHeroInfo"
import ChangeHero from "@/components/sections/RandomHero/ChangeHero/ChangeHero"
import { useEffect, useState } from "react"
import { heroService } from "@/services/heroes/hero.services";
import { Hero } from "@/services/heroes/hero.types";



export default function RandomHero() {
    const [hero, setHero] = useState<Hero |null>(null)

    const updateHero = async () => {
        console.log("updateHero");
        const randomId = String(Math.floor(Math.random() * 731) + 1);
    try {
            const data = await heroService.getHero(randomId);
            setHero(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        updateHero();
    }, []);
    return (
        <>
            <section className="flex my-12.5 justify-between shadow-[0_0_10px_4px_rgba(0,0,0,0.15)] ">
                <RandomHeroInfo hero={hero}/>
                <ChangeHero onChangeHero={updateHero} />
            </section>
        </>
    )
}