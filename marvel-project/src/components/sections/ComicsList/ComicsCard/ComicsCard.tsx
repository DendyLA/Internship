import Image from "next/image"


export default function ComicsCard() {
    return(
        <>
            <div className="flex flex-col w-full mt-12.5 cursor-pointer transition-all ease-out duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(35,34,34,0.7)]">
                <Image src="/images/x-men-poster.jpg" alt="x-men" width={250} height={120} className="w-full h-auto object-cover"/>
                <h2 className="text-black text-[14px] font-bold pl-1 pt-3 pb-1">X-Men: Days of Future Past</h2>
                <span className="text-[#555454] font-bold pl-1 pb-1 text-[14px]">NOT AVAILABLE</span>
            </div>
        </>
    )
}