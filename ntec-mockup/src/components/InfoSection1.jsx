
import { GiMaterialsScience } from "react-icons/gi";
import scientist1 from '../assets/scientist1.jpg'
import { MdEdit } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

import React from 'react';

function InfoSection1(props) {
    
    return (
        
        <div className='h-[70vh]  w-[100vw] flex p-[20px] justify-around 2xl:justify-center 2xl:gap-[80px]'>
    

            {/* images here  */}
            <div className="relative border-0 h-full w-[45%] max-w-[600px] flex justify-center items-center">
            {/* Inner div with green background */}
                <div className="absolute w-[80%] h-[80%] bg-green-600"></div>
                {/* Image */}
                <img src={scientist1} alt="scientist" className="absolute w-[75%] h-[75%] object-cover mb-[6vh] ml-[6vw] shadow-2xl" />
            </div>


            {/* info section here  */}

            <div className="border-0 h-full w-[45%] max-w-[600px] p-[20px] flex flex-col ">

                <div className="flex gap-[10px] items-center">
                    <GiMaterialsScience className="size-[30px] text-green-600"/>
                    <p className='text-green-600 font-extralight tracking-widest text-[20px]'>
                        Overview
                    </p>
                </div>

                <div className="flex flex-col gap-[30px] border-0 mt-[20px]">
                    <h1 className="text-3xl font-bold">Innovative Technology With Global Impact</h1>
                    <p className="font-extralight text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet, quibusdam animi omnis nulla molestiae consectetur tenetur cupiditate est a facilis repellat impedit, assumenda laboriosam quod tempore nihil delectus possimus.
                    </p>
                </div>

                <div className="flex gap-[25px] border-0 w-full p-[10px] h-[25vh] mt-[50px]">

                    <div className="h-full w-[50%] border-0 flex flex-col items-center justify-center bg-gray-100 shadow-2xl">

                        <div className="rounded-full bg-green-600 w-[70px] h-[70px] translate-y-[-4vh] shadow-2xl flex justify-center items-center">
                            <MdEdit className="text-white size-[35px]"/>
                        </div>

                        <h3 className="font-extralight text-[15px] translate-y-[-2vh] ">Modify EV's to your needs.</h3>

                        <p className="text-gray-500 text-[13px] ml-[20px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi illum  quidem o?</p>
                        
                    </div>
                    <div className="h-full w-[50%] border-0 flex flex-col items-center justify-center bg-gray-100 shadow-2xl">

                        <div className="rounded-full bg-green-600 w-[70px] h-[70px] translate-y-[-4vh] shadow-2xl flex justify-center items-center">
                            <CiGlobe className="text-white size-[35px]"/>
                        </div>

                        <h3 className="font-extralight text-[15px] translate-y-[-2vh] ">Change the world for good.</h3>

                        <p className="text-gray-500 text-[13px] ml-[20px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi illum  quidem o?</p>
                        
                    </div>
                    
                    

                    

                </div>
                

            </div>
            
        </div>
    );
}

export default InfoSection1;