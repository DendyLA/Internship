import Image from "next/image"



export default function Banner() {
    return(
        <>
        <div className="mt-13 bg-[#232222] flex gap-150">
            <div className="flex items-center gap-21 pl-11.5">
                <Image src="/images/avengers.png" alt="avengers" width={172} height={120} className="object-contain"/>
                <p className="font-bold text-[24px] text-white">New comics every week!<br />Stay tuned!</p>
            </div>
            <Image src="/images/logo.png" alt="avengers_logo" width={152} height={100} className="object-contain"/>
        </div>
        
        </>
    )
}