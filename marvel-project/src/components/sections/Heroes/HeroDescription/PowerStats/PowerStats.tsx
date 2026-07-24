import type { Hero } from "@/services/heroes/hero.types";
import PowerStatItem from "./PowerStatItem";


type PowerStatsProps={
    powerstats: Hero['powerstats']
}

export default function PowerStats({powerstats}:PowerStatsProps){
    const stats=Object.entries(powerstats).map(([key,value])=>({
        title: key.charAt(0).toUpperCase()+key.slice(1), value
    }))
    return(
        <>
            <div className="flex flex-col gap-5">
                <h2 className="text-lg font-bold">Powerstats</h2>
                {stats.map((stat)=>(
                    <PowerStatItem key={stat.title} title={stat.title} value={stat.value}/>
                ))}
            </div>
        </>
    )
}

