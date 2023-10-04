import React from 'react'
import {BsFillBuildingFill} from 'react-icons/bs'
import {BiBed} from 'react-icons/bi'
import {LiaBathSolid} from 'react-icons/lia'
import {TbSquareArrowUp} from 'react-icons/tb'
import {GrLocation} from 'react-icons/gr'

const Card = ({address1,address2,bath,room, city, bed,location,imageUrl, area,rent,}) => {
    console.log(address1)
  return (
    <div className='bg-slate-100 rounded-xl'>
        <div className='flex justify-center'>
            <img src={imageUrl} alt='hotel' width="400" className='rounded-xl m-2' />
        </div>

        <div className='flex gap-2 ml-6 mt-4 items-center'>
            <GrLocation className='text-yellow-300'/>
            <div className='font-light-bold'>{location}, {city}</div>
        </div>
           

        <div className='flex flex-col mt-6'>
        <div className='font-bold font-serif ml-7 text-lg'>{address1}</div>
        <div className='font-bold font-serif ml-7 text-lg'>{address2}</div>


            <div className='flex justify-around mt-6 mb-10 ml-2'>
                <div className='flex flex-col items-center'>
                    <BsFillBuildingFill/>
                    <div>{room} Rooms</div>
                </div>
                <div>
                    <BiBed className='mx-auto'/>
                    <div className='ml-1'>{bed} Bed</div>
                </div> 
                <div>
                    <LiaBathSolid className="mx-auto"/>
                    <div className='ml-1'>{bath} Bath</div>
                </div> <div>
                    <TbSquareArrowUp className='ml-1'/>
                    <div>{area} sft</div>
                </div>
            </div>
        </div>

        <div className='flex justify-around  items-center mb-6'>
            <div><span className='text-blue-600 font-bold'>${rent}</span>/month</div>
            <div className='outline  rounded-full text-blue-600'><button className='text-blue-600  font-bold m-2'>Read More</button></div>
        </div>

    </div>
  )
}

export default Card