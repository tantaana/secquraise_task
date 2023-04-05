import './App.css';

import { db } from './firebase/firebase';
import { uid } from 'uid';
import { set, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import ShowInfo from './Pages/ShowInfo';
import FullInfo from './Pages/FullInfo';
import Navbar from './Pages/Navbar/Navbar';
import Filter from './Pages/Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';
import { HiViewList } from 'react-icons/hi'
import { IoMdExit } from 'react-icons/io'



function App() {
  const [getData, setGetData] = useState([]);

  const [searchData, setSearchData] = useState('');
  console.log(searchData);
  const [anotherData, setAnotherData] = useState(null);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    onValue(ref(db), (loadData) => {
      const data = loadData.val();
      setGetData(data);
      setLoader(false);
      // if (data !== null) {
      //   Object.values(data).map((datas) => {
      //     setGetData(oldArray => [...oldArray, datas])
      //   })
      // }
    })
  }, [])


  const handleClose = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };


  const locationSearch = event => {
    event.preventDefault();
    const data = event.target;
    const location = data.location.value;

    const filterLocation = getData?.filter(searchLocation => searchLocation.Location === location)

    if (filterLocation) {
      setSearchData(filterLocation);
      toast.success('Successfully filtered by location',
        {
          style: {
            border: '1px solid #4F8051',
            padding: '16px',
            color: '#4F8051',
            fontSize: '18px',
            fontWeight: 'bold'
          },
          position: 'top-right',
          iconTheme: {
            primary: '#4F8051',
            secondary: '#FFFAEE',
          },
        }
      );
    }
  }

  const genderSearch = event => {
    event.preventDefault();
    const data = event.target;
    const gender = data.gender.value;

    const filterGender = getData?.filter(searchGender => searchGender.Gender === gender)

    if (filterGender) {
      setSearchData(filterGender);
      toast.success('Successfully filtered by gender',
        {
          style: {
            border: '1px solid #4F8051',
            padding: '16px',
            color: '#4F8051',
            fontSize: '18px',
            fontWeight: 'bold'
          },
          position: 'top-right',
          iconTheme: {
            primary: '#4F8051',
            secondary: '#FFFAEE',
          },
        }
      )
    }
  }

  const dateSearch = event => {
    event.preventDefault();
    const data = event.target;
    const date = data.date.value;
    console.log(date)

    const filterDate = getData?.filter(searchDate => searchDate.Date === date)

    if (filterDate) {
      setSearchData(filterDate);
      toast.success('Successfully filtered by date',
        {
          style: {
            border: '1px solid #4F8051',
            padding: '16px',
            color: '#4F8051',
            fontSize: '18px',
            fontWeight: 'bold'
          },
          position: 'top-right',
          iconTheme: {
            primary: '#4F8051',
            secondary: '#FFFAEE',
          },
        }
      );
    }
  }

  const resetAll = () => {
    setSearchData(getData);
    toast.success('Successfully reseted all data',
      {
        style: {
          border: '1px solid #4F8051',
          padding: '16px',
          color: '#4F8051',
          fontSize: '18px',
          fontWeight: 'bold'
        },
        position: 'top-right',
        iconTheme: {
          primary: '#4F8051',
          secondary: '#FFFAEE',
        },
      }
    );
    handleClose()
  }

  return (
    <div>
      <Toaster />
      <div>
        <Navbar getData={getData} />
      </div>

      <div className='flex flex-col-reverse xl:grid xl:grid-cols-12'>

        <div className='hidden xl:flex flex-col items-center justify-between pt-6 pb-20 h-screen w-[80px] bg-blue-400'>
          <HiViewList className='text-4xl font-bold text-white hover:text-gray-300 hover:cursor-pointer' />
          <IoMdExit className='text-4xl font-bold text-white hover:text-gray-300 hover:cursor-pointer' />
        </div>

        <div className='xl:col-span-7 mb-8 xl:mb-0'>
          {
            loader ?
              <div class="flex justify-center my-10">
                <div class="w-12 h-12 rounded-full animate-spin
    border-4 border-solid border-sky-700 border-t-transparent shadow-md"></div>


              </div>
              :
              <>{
                anotherData ?
                  <FullInfo anotherData={anotherData} />
                  :
                  <FullInfo getData={getData[0]} />
              }</>
          }
        </div>

        <div className='xl:col-span-4 h-[500px] mb-10 xl:mb-0 xl:h-screen overflow-scroll overflow-x-hidden border border-gray-300 xl:border-none'>
          {
            loader ?
              <div class="flex justify-center my-10">
                <div class="w-12 h-12 rounded-full animate-spin
        border-4 border-solid border-sky-700 border-t-transparent shadow-md"></div>


              </div> :
              <>
                <div className='flex justify-between items-center mb-10 sticky top-0 bg-white'>
                  <h2 className='text-3xl font-bold py-2 px-2'>Events</h2>


                  <Filter locationSearch={locationSearch} genderSearch={genderSearch} dateSearch={dateSearch} resetAll={resetAll} />

                </div>

                <div className='px-2'>
                  {
                    !searchData ?
                      getData?.map(data => <ShowInfo key={data.id} data={data} setAnotherData={setAnotherData} />
                      )
                      :
                      searchData?.map(data => <ShowInfo key={data.id} data={data} setAnotherData={setAnotherData} />
                      )
                  }
                </div>
              </>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
