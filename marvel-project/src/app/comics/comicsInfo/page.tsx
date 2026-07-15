import Banner from "@/components/ui/Banner/Banner";
import ComicsInfo from "@/components/sections/ComicsInfo/ComicsInfo";



export default function Comics() {
  return (
    <>
    <div className="flex flex-col gap-15">
      <Banner />
      <ComicsInfo />
    </div>
    </>
  )
}