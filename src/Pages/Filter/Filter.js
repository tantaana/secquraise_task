import React, { useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';


const Filter = ({ locationSearch, genderSearch, dateSearch, resetAll }) => {


    const handleClose = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="hover:bg-blue-500 p-2 me-4 flex justify-start items-center"><FaListUl className='text-3xl hover:cursor-pointer' /></label>

            <div tabIndex={0} className="dropdown-content p-2 shadow rounded-box w-52 bg-gray-400 me-4 h-[400px] xl:h-[550px] overflow-y-scroll">
                <div className='flex flex-col gap-10 mb-4'>
                    <div className='flex justify-end p-2'>
                        <ImCross onClick={handleClose} className='text-xl text-red-600 hover:text-black hover:cursor-pointer' />
                    </div>

                    <form onSubmit={locationSearch}>
                        <h2 className='font-semibold mb-1'>Filter by location</h2>

                        <select name="location" className="select select-sm w-full mb-3" required>
                            <option value="" disabled selected>Choose Location</option>
                            <option value='Bangalore'>Bangalore</option>
                            <option value='Chennai'>Chennai</option>
                            <option value='Hyderabad'>Hyderabad</option>
                        </select>

                        <div className='flex justify-center'>
                            <input type="submit" className='btn btn-sm glass bg-blue-500 hover:bg-blue-600' value="Search" />
                        </div>
                    </form>

                    <form onSubmit={genderSearch}>
                        <h2 className='font-semibold mb-1'>Filter by gender</h2>

                        <select name="gender" className="select select-sm w-full mb-3" required>
                            <option value="" disabled selected>Choose Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>

                        <div className='flex justify-center'>
                            <input type="submit" className='btn btn-sm glass bg-blue-500 hover:bg-blue-600' value="Search" />
                        </div>
                    </form>

                    <form onSubmit={dateSearch}>
                        <h2 className='font-semibold mb-1'>Filter by date</h2>

                        <input type="date" name="date" pattern="\d{2}-\d{2}-\d{4}" min="2023-01-05" max="2023-01-09" className="input input-bordered w-full input-sm mb-3" required />

                        <div className='flex justify-center'>
                            <input type="submit" className='btn btn-sm glass bg-blue-500 hover:bg-blue-600' value="Search" />
                        </div>
                    </form>
                </div>

                <h2 onClick={resetAll} className="glass btn btn-sm bg-red-500 hover:bg-red-600 flex justify-center items-center">Reset All</h2>

            </div>
        </div>
    );
};

export default Filter;