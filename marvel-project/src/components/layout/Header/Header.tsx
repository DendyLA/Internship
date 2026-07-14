export default function Header () {
    return (
        <header className="flex justify-between mt-12.5 text-[28px] font-bold">
            <h1>
                <span className='text-[#9F0013]'>Marvel </span>
                infromation portal
            </h1>
            <nav>
                <a href="#" className='text-[#9F0013] hover:text-[#db2a3fe7]'>Characters</a>
                <span> / </span>
                <a href="#" className='hover:text-[#5C5C5C]'>Comics</a>
            </nav>
        </header>
    )
}