'use client'

import { useEffect, useState } from "react"
import { heroService } from "@/services/apiClient/heroes/hero.services"
import type { Hero } from "@/services/apiClient/heroes/hero.types"
import Button from "@/components/ui/Button/Button"
import Image from "next/image"


export default function RandomHeroInfo() {
    const [hero, setHero] = useState<Hero | null>(null)
    console.log(hero);
    const updateHero = async () => {
        const randomId = String(Math.floor(Math.random() * 731) + 1);
        try {
            const data = await heroService.getHero(randomId)
            setHero(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        updateHero()
    }, [])
    if (!hero) {
        return <section>Loading...</section>
    }
    return (
        <>
            <section className="flex justify-between">
                <div className="flex-1 h-71 px-10 py-8">
                    <div className="flex">
                        <div className="shrink-0 ">
                            <img src={hero.image.url} alt={hero.name} width={220} height={220} className="object-contain flex-1"/>
                        </div>
                        <div className="flex flex-col ml-7.5 mw-[250px]">
                            <h2 className="font-bold text-[22px] mb-2.5">{hero.name}</h2>
                            <p className='max-w-prose text-ellipsis text-[14px]'> <span className="font-bold">Full name: </span>{hero.biography["full-name"] || "Unknown"}.<br /> <span className="font-bold">First appearance: </span>{hero.biography["first-appearance"]}</p>
                            <div className="flex gap-10 mt-6 text-[16px]">
                                <Button href="#" color="red">
                                    HOMEPAGE
                                </Button>
                                <Button href="#" color='grey'>
                                    WIKI
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}