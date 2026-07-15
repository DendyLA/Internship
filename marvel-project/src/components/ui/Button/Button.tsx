import Link from "next/link";

type ButtonProps = {
    href: string;
    children: string;
    color: 'red' | 'grey';
    className?: string;
}

export default function Button ({href, children, color, className = ''}: ButtonProps) {
    const colorTypes= {
        red: 'bg-[#9F0013] hover:bg-[#db2a3fe7]',
        grey: 'bg-[#5C5C5C] hover:bg-[#3a3535]'
    }
    return(
        <>
            <Link href={href} className={`${colorTypes[color]} ${className} text-center text-white tracking-wide px-10 py-4 [clip-path:polygon(0_0,100%_0,100%_70%,92%_100%,0_100%,0_30%,8%_0)]`}>
            {children}
            </Link>
        </>
    )
}