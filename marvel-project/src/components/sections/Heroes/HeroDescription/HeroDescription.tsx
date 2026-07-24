import Button from "@/components/ui/Button/Button"
import Image from "next/image"
import Link from "next/link"
import type { Hero } from "@/services/heroes/hero.types"
import HeroDecsriptionSkeleton from "./HeroDescriptionSkeleton"

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
                <div className="flex flex-col gap-3">
                    <h2 className="text-[15px] font-bold">Comics:</h2>
                    <ul className="flex flex-col text-[12px] gap-2">
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">All-Winners Squad: Band of Heroes (2011) #3</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">Alpha Flight (1983) #50</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">Amazing Spider-Man (1999) #503</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">Amazing Spider-Man (1999) #504</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">Vengeance (2011) #4</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">Avengers (1963) #1</Link>
                        </li>
                        <li>
                            <Link href="#"className="block bg-white px-3 py-2 shadow-lg hover:shadow-[#5C5C5C] transition-shadow">Avengers (1996) #1</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )  
}