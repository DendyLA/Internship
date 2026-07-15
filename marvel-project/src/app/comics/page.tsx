import ComicsList from "@/components/sections/ComicsList/ComicsList";
import Banner from "@/components/ui/Banner/Banner";
import Button from "@/components/ui/Button/Button";



export default function Comics() {
  return (
    <>
    <div className="flex flex-col">
      <Banner />
      <ComicsList />
      <div className="flex justify-center my-15">
        <Button href="#" color='red'>LOAD MORE</Button> 
      </div>
    </div>
    </>
  )
}