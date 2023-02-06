import React from 'react'

export const Hero = () => {
    return (
        <>
            <div className='flex flex-col md:grid md:grid-cols-2 p-2 mt-4 h-[90vh]'>

                <div className='flex flex-col items-center text-center justify-center p-4 gap-2'>
                    <h2 className='text-2xl text-textRed font-bold'>Fitness club</h2>
                    <span className='text-3xl text-textBlack font-semibold mt-2'>Sweat, Smile</span>
                    <span className='text-3xl text-textBlack font-semibold'>And Repeat</span>
                    <span className='text-xl text-alternative mt-2 '>Check out the most effective exercises for you.</span>
                    <button className='bg-textRed text-font mt-2  rounded p-1'>Explore Exercises</button>
                </div>

                <div className='w-full md:absolute md:top-0 md:right-0 md:w-[50%] h-full p-4' >
                    <img src="/assets/images/banner.png" alt="#" />
                </div>

            </div>
        </>
    )
}
