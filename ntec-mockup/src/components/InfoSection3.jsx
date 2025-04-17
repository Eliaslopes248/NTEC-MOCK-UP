import React from 'react'
import chemist from '../assets/chemist2.jpg'
import { BsPersonCircle } from "react-icons/bs";

export default function InfoSection3() {
  return (
    <div className='w-[100vw] bg-[#313659] h-[70vh] mt-[20vh] flex flex-col items-center '>
        <div className="bg-white shadow-2xl w-[70vw] h-[35vh] translate-y-[-17vh] flex overflow-hidden">

            {/* add text here  */}
            <div className="w-[50%] h-full flex flex-col p-[30px]">
                
                <div className="flex gap-[15px] items-center text-green-600">
                    <BsPersonCircle size={25}/>
                    <p className='text-green-600 font-extralight tracking-wider'>Developed by who?</p>
                </div>
                <h3 className='text-3xl mt-[2vh] font-bold'>Meet <span className='font-extralight tracking-wider'>Kameron Burton</span></h3>
                <p className='text-gray-400 mt-[3vh]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt repellat enim voluptas quam provident? Sapiente facere sit harum dores non doloremque?</p>
            
                <button className='border-[1px] text-green-600 p-[10px] font-extralight w-[150px] mt-[2vh] hover:bg-green-600 hover:text-white duration-[.2s]'>Learn more</button>

            </div>

            {/* img goes here */}
            <div className="w-[50%] h-full overflow-hidden">
                <img src={chemist} alt="" srcset="" className='object-cover' />
            </div>
            
        </div>
    </div>
  )
}


