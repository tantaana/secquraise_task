import React from 'react';
import './Navbar.css'
import { RxMagnifyingGlass } from 'react-icons/rx'

const Navbar = ({ getData }) => {
    const filterDataMale = getData?.filter(gender => gender?.Gender === 'Male')

    const filterDataFemale = getData?.filter(gender => gender?.Gender === 'Female')

    return (
        <div className='bg-blue-900 p-2 grid grid-cols-2 lg:grid-cols-3'>
            <h2 className='lg:col-span-2 titleLogo uppercase text-3xl font-bold text-teal-700'><span className='text-4xl'>S</span>ecqur<span className='text-4xl text-red-600'>ai</span>se</h2>

            <div className='flex items-center justify-end md:justify-between gap-4'>
                <div className='hidden md:flex items-center gap-2 xl:gap-3'>
                    <RxMagnifyingGlass className='text-white text-4xl font-bold' />
                    <input type="text" placeholder="Search ...." className="input input-sm w-full border-none rounded-full bg-blue-700" />
                </div>

                <div className='flex justify-between items-center gap-4'>
                    <h2 className='tooltip tooltip-left tooltip-success text-3xl font-bold bg-green-500 px-4 py-1' data-tip="Total Number of Male">{filterDataMale.length}</h2>
                    <h2 className='tooltip tooltip-left tooltip-error text-3xl font-bold bg-orange-600 px-4 py-1' data-tip="Total Number of Female">{filterDataFemale.length}</h2>
                </div>
            </div>

        </div>
    );
};

export default Navbar;