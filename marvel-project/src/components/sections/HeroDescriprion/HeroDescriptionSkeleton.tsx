import Skeleton from '@mui/material/Skeleton'


export default function HeroDecsriptionSkeleton() {
    return(
        <>
            <div className='flex flex-col ml-10 p-8 gap-8 shadow-[0_0_10px_4px_rgba(0,0,0,0.15)] w-full h-max'>
                <span className='text-[22px] font-bold self-center'>Please select a character to see information</span>
                <div className='flex flex-col'>
                    <div className='flex gap-3 items-center justify-between'>
                        <Skeleton variant='circular' width={60} height={60}  />
                        <Skeleton variant='text' width={420} height={50} />
                    </div>
                        <div className='flex flex-col mt-1'>
                            <Skeleton variant='text' width={500} height={80} />
                            <Skeleton variant='text' width={500} height={80} />
                            <Skeleton variant='text' width={500} height={80} />
                        </div>
                </div>
            </div>
        </>
    )
}