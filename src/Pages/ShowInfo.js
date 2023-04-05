import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './ShowInfo.css'

const ShowInfo = ({ data, setAnotherData }) => {

    return (
        <div onClick={() => setAnotherData(data)} className="bg-zinc-300 hover:bg-zinc-500 text-black hover:text-white hover:cursor-pointer p-2 mb-4 mx-16 md:mx-12 lg:mx-20 xl:mx-0">
            <div className='grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 mb-10'>
                <div className='col-span-3 lg:col-span-4 xl:col-span-2 flex justify-start gap-2'>
                    <h1 className='text-2xl font-semibold'>{data?.id}:</h1>
                    <h1 className='text-2xl font-semibold'>{data?.Location}</h1>
                </div>

                <div>
                    <div className='flex flex-col md:flex-row xl:flex-col items-end 2xl:flex-row justify-between'>
                        <h1 className='font-semibold'>{data?.Date}</h1>
                        <h1 className='font-semibold'>{data?.Time}</h1>
                    </div>
                </div>
            </div>

            <h2 className='text-xl font-semibold'>Person Detected.</h2>
        </div>
    );
};

export default ShowInfo;