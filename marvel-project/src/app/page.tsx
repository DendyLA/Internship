import HeroDescriprion from "@/components/sections/HeroDescriprion/HeroDescriprion";
import HeroesList from "@/components/sections/HeroesList/HeroesList";
import RandomHero from "@/components/sections/RandomHero/RandomHero";

export default function Home() {
  return (
    <>
      <RandomHero/>
      <div className="flex">
        <HeroesList/>
        <HeroDescriprion/>
      </div>
    </>
  )
}
