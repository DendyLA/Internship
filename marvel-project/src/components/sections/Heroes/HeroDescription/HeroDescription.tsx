import Button from "@/components/ui/Button/Button"
import Image from "next/image"
import Link from "next/link"
import type { Hero } from "@/services/heroes/hero.types"
import HeroDecsriptionSkeleton from "./HeroDescriptionSkeleton"
import PowerStats from "./PowerStats/PowerStats"

type HeroDescriptionProps = {
    hero: Hero | null
}

export default function HeroDescription({hero,}:HeroDescriptionProps) {
    
    if (!hero){
        return <HeroDecsriptionSkeleton/>
    }
    
    return (
        <>
            <section className="flex flex-col p-7 w-full h-225 shadow-[0_0_10px_4px_rgba(0,0,0,0.15)] ml-10">
                <div className="flex">
                    <div>
                        <Image src="/images/Abyss.jpg" alt={hero.name} width={220} height={220} className="object-contain flex-1"/>
                    </div>
                    <div className="flex flex-col h-full gap-12 ml-10 mt-2">
                        <h2 className="font-bold text-[22px] uppercase">{hero.name}</h2>
                        <div className="flex flex-col gap-2"> 
                            <Button href="#" color="red">
                                HOMEPAGE
                            </Button>
                            <Button href="#" color="grey">
                                WIKI
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-[14px] my-5">
                    <div>
                        <span className="font-bold">Full name: </span>{''}
                        {hero.biography['full-name']|| 'Unknown'}
                    </div>
                    <div>
                        <span className="font-bold">Publisher: </span>{''}
                        {hero.biography.publisher || 'Unknown'}
                    </div>
                    <div>
                        <span className="font-bold">First appearance: </span>{''}
                        {hero.biography['first-appearance']|| 'Unknown'}
                    </div>
                    <div>
                        <span className="font-bold">Place of birth: </span>{''}
                        {hero.biography['place-of-birth']|| 'Unknown'}
                    </div>
                    <div>
                        <span className="font-bold">Alignment: </span>{''}
                        {hero.biography.alignment|| 'Unknown'}
                    </div>
                </div>
                <PowerStats powerstats={hero.powerstats}/>
            </section>
        </>
    )  
}