import Image from "next/image"
import Link from "next/link"

export default function ChangeHero() {
    return (
        <>
            <div>
                <div className="flex-1">
                     <div className="flex flex-col w-170 h-71 bg-[#232222] text-white pl-10 py-9 ">
                        <h2 className="font-bold text-[24px]">Random character for today! <br /> Do you want to get to know him better?</h2>
                        <span className='font-bold text-[24px] mt-6 -mb-1'>Or choose another one</span>
                         <div className="flex justify-between items-center">
                            <div className="mt-6">
                                <Link href="#" className=" bg-[#9F0013] text-center text-white tracking-wide px-10 py-4 [clip-path:polygon(0_0,100%_0,100%_70%,92%_100%,0_100%,0_30%,8%_0)] hover:bg-[#db2a3fe7]">
                                TRY IT
                                </Link>
                            </div>
                            <div className="flex">
                                <Image src="/images/shield.png" alt="shield" width={105} height={105} className="object-contain -mr-25"/>
                                <Image src="/images/mjolnir.png" alt="mjolnir" width={220} height={220} className="object-contain -mt-30 "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}