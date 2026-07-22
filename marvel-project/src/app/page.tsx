import HeroDescriprion from "@/components/sections/HeroDescriprion/HeroDescriprion";
import HeroDescriptionSkeleton from "@/components/sections/HeroDescriprion/HeroDescriptionSkeleton";
import HeroesList from "@/components/sections/HeroesList/HeroesList";
import RandomHero from "@/components/sections/RandomHero/RandomHero";
import Vision from "@/components/sections/Vision/Vision";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <>
      <RandomHero/>
      <div className="flex my-10">
        <HeroesList/>
        <HeroDescriptionSkeleton/>
      </div>
        <Vision/>
        <div className="-mt-30 ml-70">
         <Button href="#" color='red'>LOAD MORE</Button> 
        </div>
        
    </>
  )
}
