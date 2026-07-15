import ComicsCard from "./ComicsCard/ComicsCard";




export default function ComicsList() {
    return(
        <>
            <section className='w-full'> 
                <div className="grid grid-cols-4 gap-y-14 gap-x-17">
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                    <ComicsCard/>
                </div>
            </section>
        </>
    )
}