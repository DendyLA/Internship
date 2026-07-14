//650

import HeroCard from "./ListItem/HeroCard";



export default function HeroesList() {
    return(
        <>
            <section className=''> 
                <div className="grid grid-cols-[repeat(3,max-content)] gap-10 justify-items-start">
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                </div>
            </section>
        </>
    )
}