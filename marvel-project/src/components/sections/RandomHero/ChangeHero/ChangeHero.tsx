import Button from "@/components/ui/Button/Button"
import Image from "next/image"


type ChangeHeroProps = {
    onChangeHero: () => void;
};

export default function ChangeHero({onChangeHero,}: ChangeHeroProps) {
    return (
        <>
            <div>
                <div className="flex-1">
                     <div className="flex flex-col w-170 h-71 bg-[#232222] text-white pl-10 py-9 ">
                        <h2 className="font-bold text-[24px]">Random character for today! <br /> Do you want to get to know him better?</h2>
                        <span className='font-bold text-[24px] mt-6 -mb-1'>Or choose another one</span>
                         <div className="flex justify-between items-center">
                            <div className="mt-8">
                                <Button color='red' onClick={onChangeHero}>
                                TRY IT
                                </Button>
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