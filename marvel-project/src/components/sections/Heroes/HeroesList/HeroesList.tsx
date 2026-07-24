import type { Hero } from "@/services/heroes/hero.types";
import HeroCard from "./HeroCard/HeroCard";


type HeroesListProps = {
    heroes: Hero[],
    onSelectHero:(hero: Hero) => void,
}


export default function HeroesList({heroes, onSelectHero}: HeroesListProps) {
    return(
        <>
            <section className='flex'>
                <div className="grid grid-cols-[repeat(3,max-content)] gap-10 justify-items-start">
                    {heroes.map((hero)=> (
                        <HeroCard key={hero.id} hero={hero} onSelect={onSelectHero}/>
                    ))}
                </div>
            </section>
        </>
    )
}