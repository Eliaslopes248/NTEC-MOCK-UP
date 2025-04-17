import React from 'react'
import chemist from '../assets/chemist2.jpg'
import { BsPersonCircle } from "react-icons/bs";
import med1 from '../assets/medication1.jpg'

export default function InfoSection3() {
  return (
    <div className='w-[100vw] bg-[#313659] h-[120vh] mt-[20vh] flex flex-col items-center '>
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


        <div className="w-[90%] border-0 h-[50%] flex gap-[20px] justify-around">

            <div className="border-0 w-[50%] h-full relative">
                <img src={med1} alt="" className="object-cover w-full h-full" />
                <div className="absolute top-0 left-0 w-[65%] h-[65%] p-[40px] bg-green-600 shadow-2xl z-[2] translate-y-[30vh] translate-x-[20vw] flex flex-col ">
                    <h1 className='text-white text-4xl xl:text-4xl font-thin'>Fostering Growth of Medicine</h1>
                    <p className='font-bold text-white mt-[2vh]'>Lorem ipsum dolor sit amet consectetur adipisicing aboil? Dignissimos sed aspernatur perspiciatis deserunt eveniet labore asperiores fugit!</p>
                </div>
            </div>

            <div className=" w-[40%] h-full relative border-0 p-[30px] flex flex-col justify-center ">
                <p className='text-white text-[18px] font-extralight'>A World Wide Distributor of Custom EV Therapeutics</p>
                <h1 className='text-green-600 text-5xl font-bold mt-[0px]'>
                    Sustainable, Pure & Affordable!
                </h1>
                <p className='text-white mt-[5vh]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio vero esse voluptatum ea harum voluptatibus aut? Repellat, nobis! Inventore amet ducimus enim ut voluptates quis natus? Consequatur amet qui pariatur.
                </p>

                <div className="flex flex-col mt-[5vh]">
                    <h3 className='text-green-600 font-bold text-[20px]' >Kameron Burton</h3>
                    <h3 className='text-white'>Founder</h3>
                </div>
                
            </div>

        </div>

    </div>
  )
}


