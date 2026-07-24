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
                <div className="flex flex-1 h-25.5">
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
                <div className="w-full">
                    <p className='font-semibold text-justify text-[15px]'>
                        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                    </p>
                </div>
                <PowerStats powerstats={hero.powerstats}/>
            </section>
        </>
    )  
}