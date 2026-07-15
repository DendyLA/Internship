import Image from "next/image"
import Link from "next/link"



export default function ComicsInfo() {
    return(
        <>
            <div className="flex gap-32">
                <div className="flex gap-12">
                    <Image src="/images/x-men-poster.jpg" alt="x-men" width={293} height={450} className="object-contain"/>
                    <div className="flex flex-col gap-6.5">
                        <h2 className="font-bold text-[24px]">X-Men: Days of Future Past</h2>
                        <p className="text-[18px] font-light max-w-199">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                        <span className="text-[18px]">144 pages</span>
                        <span className="text-[18px]">Language: en-us</span>
                        <span className="text-[#9F0013] text-[24px] font-bold">9.99$</span>
                    </div>
                </div>
                <div>
                 <Link href={'#'} className="font-bold text-[18px] text-black hover:text-[#3a3535]">Back to all</Link>   
                </div>
            </div>
        </>
    )
}