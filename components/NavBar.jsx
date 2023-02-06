import React from 'react'


export const NavBar = () => {
    return (
        <div className='flex flex-row items-center   justify-between w-auto md:w-[50%] p-4'>
            <div className='flex items-center  md:items-start md:justify-start '>
                <img src="/assets/images/Logo.png" width={32} alt="" />
            </div>
            <div className='text-textBlack relative flex flex-row items-center justify-center p-4 gap-4'>
                <span className='text-xl'>Home</span>
                <span className='text-xl'>Exercises</span>

            </div>
        </div>
    )
}
