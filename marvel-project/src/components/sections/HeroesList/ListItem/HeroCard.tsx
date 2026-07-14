import Image from "next/image"


export default function HeroCard() {
    return(
        <>
            <div className="w-55 h-80 bg-[#232222] cursor-pointer transition-all ease-out duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(159,0,19,0.7)]">
                <Image src="/images/Abyss.jpg" alt="Abbys" width={250} height={250} className="object-contain flex-1"/>
                <h2 className="text-white text-[22px] font-medium p-3.75">ABYSS</h2>
            </div>
        </>
    )
}