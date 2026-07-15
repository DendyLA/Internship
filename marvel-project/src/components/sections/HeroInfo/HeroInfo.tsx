


import Image from "next/image"
import Link from "next/link"



export default function HeroInfo() {
    return(
        <>
            <div className="flex gap-32">
                <div className="flex gap-12">
                    <Image src="/images/Loki.jpg" alt="Loki" width={293} height={450} className="object-contain"/>
                    <div className="flex flex-col gap-6.5">
                        <h2 className="font-bold text-[24px] uppercase">Loki</h2>
                        <p className="text-[18px] font-light max-w-199">In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</p>
                    </div>
                </div>
            </div>
        </>
    )
}