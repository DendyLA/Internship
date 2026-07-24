import { motion } from "framer-motion";

type PowerStatItemProps={
    title: string;
    value: string;
}


export default function PowerStatItem({title, value}:PowerStatItemProps){
    const percent = Number(value) || 0
    const colors: Record<string, string> = {
        Intelligence: "bg-blue-500",
        Strength: "bg-red-500",
        Speed: "bg-yellow-400",
        Durability: "bg-green-500",
        Power: "bg-purple-500",
        Combat: "bg-orange-500",
    };
    const color = colors[title] ?? "bg-[#9F0013]";
    return(
        <>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between font-2 font-semibold">
                    <span>{title}</span>
                    <span>{percent}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-gray-300 overflow-hidden">
                    <motion.div className={`h-full ${color}`} initial={{width:0}} animate={{width:`${percent}%`}} transition={{duration: 0.8}}/>
                </div>
            </div>
        </>
    )
}