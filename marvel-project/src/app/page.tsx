import HeroDescriprion from "@/components/sections/HeroDescriprion/HeroDescriprion";
import HeroesList from "@/components/sections/HeroesList/HeroesList";
import RandomHero from "@/components/sections/RandomHero/RandomHero";
import Vision from "@/components/sections/Vision/Vision";

export default function Home() {
  return (
    <>
      <RandomHero/>
      <div className="flex my-10">
        <HeroesList/>
        <HeroDescriprion/>
      </div>
      <Vision/>
    </>
  )
}
