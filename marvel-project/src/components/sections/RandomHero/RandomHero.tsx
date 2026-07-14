import RandomHeroInfo from "@/components/sections/RandomHero/RandomHeroInfo/RandomHeroInfo"
import ChangeHero from "@/components/sections/RandomHero/ChangeHero/ChangeHero"

export default function RandomHero() {
    return (
        <>
            <section className="flex my-12.5 justify-between shadow-[0_0_10px_4px_rgba(0,0,0,0.15)]">
                <RandomHeroInfo/>
                <ChangeHero/>
            </section>
        </>
    )
}