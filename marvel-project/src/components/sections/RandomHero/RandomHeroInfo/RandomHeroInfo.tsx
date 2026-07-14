import Image from "next/image"
import Link from "next/link"

export default function RandomHeroInfo() {
    return (
        <>
            <section className="flex justify-between">
                <div className="flex-1 h-71 px-10 py-8">
                    <div className="flex">
                        <div className="shrink-0 ">
                            <Image src="/images/Thor.jpg" alt="Thor" width={220} height={220} className="object-contain flex-1"/>
                        </div>
                        <div className="flex flex-col ml-7.5 mw-[250px]">
                            <h2 className="font-bold text-[22px] mb-2.5">THOR</h2>
                            <p className='max-w-prose text-ellipsis text-[14px]'>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                            <div className="flex gap-10 mt-6 text-[16px]">
                                <Link href="#" className="bg-[#9F0013] text-center text-white tracking-wide px-4 py-3 [clip-path:polygon(0_0,100%_0,100%_70%,92%_100%,0_100%,0_30%,8%_0)] hover:bg-[#db2a3fe7]">
                                    HOMEPAGE
                                </Link>
                                <Link href="#" className="bg-[#5C5C5C] text-center text-white tracking-wide px-11.5 py-3 [clip-path:polygon(0_0,100%_0,100%_70%,92%_100%,0_100%,0_30%,8%_0)] hover:bg-[#3a3535] ">
                                    WIKI
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}