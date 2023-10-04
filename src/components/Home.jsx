import React, { useState } from 'react';
import { Hotels } from './Hotels';
import Card from './Card';
import { Link } from 'react-router-dom';

function Home() {

  const [hotels, setHotels] = useState(Hotels);
  const [visibleHotels, setVisibleHotels] = useState(6);

  const showMoreHotels = () => {
    setVisibleHotels(visibleHotels + 3);
  };

  const filterHotels = (city) => {
    if (city === 'All') {
      setHotels(Hotels);
    } else {
      const filteredHotels = Hotels.filter((hotel) => hotel.city === city);
      setHotels(filteredHotels);
    }
  };
  return (
    <div className='flex flex-col bg-blue-100 items-center'>
      <div className="w-11/12 ">
      
      <div className='flex flex-col items-center mt-2 gap-3'>
        <div className='text-4xl text-indigo-950 font-extrabold'>Featured Listed property</div>
        <div className='text-md text-black '>Help your home stand out with a listing description that's creative, <br></br> engaging, and showcases your home's best features.</div>
      </div>


      <div className= "flex gap-4 ml-20 mb-6">
        <button className='btn ' onClick={() => filterHotels("All")}>View All</button>
        <button className='btn' onClick={() => filterHotels('New York')}>New York</button>
        <button className='btn' onClick={() => filterHotels('Mumbai')}>Mumbai</button>
        <button className='btn' onClick={() => filterHotels('Paris')}>Paris</button>
        <button className='btn' onClick={() => filterHotels('London')}>London</button>

      </div>
      
      <div className='flex justify-center gap-6 flex-wrap'>
          {hotels.slice(0, visibleHotels).map((hotel) => (
          <Link to={`/property/${hotel.id}`}><Card {...hotel} /></Link>
        //  <Link to={`/property/:${hotel.id}`}></Link>
          ))}
      </div>
        
      <div className='flex justify-center'>
        {visibleHotels < hotels.length && (
          <button onClick={showMoreHotels} className='bg-blue-700 rounded-2xl text-white font-semibold p-2 mt-6 mb-4'>Show More</button>
        )}
      </div>
    </div>
    </div>
    
  );
}

export default Home;
