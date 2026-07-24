'use client'

import type { Hero } from "@/services/heroes/hero.types"
import Button from "@/components/ui/Button/Button"
import { Loader2 } from "lucide-react";


type RandomHeroInfoProps = {
    hero: Hero | null;
};

export default function RandomHeroInfo({hero,}: RandomHeroInfoProps) {
        if (!hero) {
        return (
            <div className="flex h-71 w-full items-center justify-center">
                <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <Loader2 className="h-8 w-8 animate-spin text-red-500" />
                    <span className="font-[15px]">Загружаем случайного героя...</span>
                </div>
            </div>
        )
    }
    return (
        <>
            <section className="flex justify-between">
                <div className="flex-1 h-71 px-10 pt-10">
                    <div className="flex">
                        <div className="shrink-0 ">
                            <img src='/images/pnegg.png' alt={hero.name} width={220} height={220} className="object-contain flex-1"/>
                        </div>
                        <div className="flex flex-col ml-7.5 mw-[250px]">
                            <h2 className="font-bold text-[22px] mb-2.5">{hero.name}</h2>
                            <p className='max-w-prose text-ellipsis text-[14px]'> <span className="font-bold">Full name: </span>{hero.biography["full-name"] || "Unknown"}.<br /> <span className="font-bold">First appearance: </span>{hero.biography["first-appearance"]}</p>
                            <div className="flex gap-10 mt-auto text-[16px]">
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