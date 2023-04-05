import React from 'react';

const FullInfo = ({ getData, anotherData }) => {
    return (
        <div>
            {
                anotherData || getData ?
                    <div className='flex flex-col-reverse gap-2 md:grid md:grid-cols-2 md:gap-1'>
                        <div className='py-10 px-2 2xl:px-4'>
                            <h2 className='text-3xl font-bold'>{anotherData ? anotherData?.id : getData?.id}</h2>
                            <h2 className='text-3xl font-bold mb-6'>Person Detected</h2>

                            <div className='grid grid-cols-2 w-[350px] mb-6'>
                                <div>
                                    <h2 className='text-3xl'>Name</h2>
                                    <h2 className='text-3xl'>Location</h2>
                                    <h2 className='text-3xl'>Date</h2>
                                    <h2 className='text-3xl'>Time</h2>
                                </div>

                                <div>
                                    <h2 className='text-3xl'>: {anotherData ? anotherData?.Name : getData?.Name}</h2>
                                    <h2 className='text-3xl'>: {anotherData ? anotherData?.Location : getData?.Location}</h2>
                                    <h2 className='text-3xl'>: {anotherData ? anotherData?.Date : getData?.Date}</h2>
                                    <h2 className='text-3xl'>: {anotherData ? anotherData?.Time : getData?.Time}</h2>
                                </div>
                            </div>

                            <h2 className='text-3xl'>Description: <br />
                                {anotherData ? anotherData?.Name : getData?.Name} detected at {anotherData ? anotherData?.Location : getData?.Location} on {anotherData ? anotherData?.Date : getData?.Date}
                            </h2>
                        </div>

                        <div>
                            <h2 className='text-3xl text-center xl:text-left font-bold mt-2 mb-4'>{anotherData ? anotherData?.Gender : getData?.Gender}</h2>
                            <div className='flex justify-center xl:justify-start'>
                                <img src={anotherData ? anotherData?.Img : getData?.Img} className="h-[500px] w-[300px] md:w-[350px] lg:w-[400px] object-cover" alt="" />
                            </div>
                        </div>
                    </div> : ''
            }
        </div>
    );
};

export default FullInfo;