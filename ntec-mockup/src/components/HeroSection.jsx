import { GiMedicines } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import React from 'react';

function HeroSection(props) {
    return (
        <div className='w-[100vw] h-[60vh] bg-[#313659] flex items-center'>

            {/** background images here..... */}

             {/* txt componet holder */}
             <div className="border-0 border-white p-[15px] h-[80%] w-[50%] ml-[5vw] block flex-wrap xl:ml-[10vw] 2xl:ml-[20vw]">

                <h1 className='text-white lg:text-5xl xl:text-6xl max-w-[600px]'>Revolutionizing Drug & Theropudic Consumption and Manufacturing</h1>

                <p className='text-white font-extralight mt-[2vh]'>We offer optmized EV manipulation to help enhance consumer experience</p>


                {/* icons and btn holder */}
                <div className=" flex gap-[40px] xl:gap-[30px] items-center h-[70px] border-0 mt-[2vh] max-w-[500px] ">

                    <GiMedicines className="text-white size-[50px] xl:size-[70px]"/>
                    <FaShippingFast className="text-white size-[50px] xl:size-[70px]"/>
                    <GiCow className="text-white size-[70px] xl:size-[80px]"/>

                    <button className="bg-green-600 p-[10px] h-[80%] w-[150px] ml-auto text-white font-extralight text-[15px]">
                        Learn More
                    </button>

                </div>

             </div>

             {/* mini text box div */}
             <div className="bg-white p-[15px] h-[40vh] w-[19vw] ml-auto mr-[8vw] min-w-[250px]  max-w-[350px] flex flex-col items-center 2xl:mr-[20vw]">

                    <GiCow className="size-[100px]"/>
                    <p className="font-black">Milk EV's</p>
                    <p className="font-extralight mt-[2vh] text-center">Lorem, ipsum dolor sit amet consectetur adipisicing ero itaque quaerat rerum neque sapiente ab.</p>
                    <FaCheckCircle className="text-green-600 size-[30px] mt-[3vh]"/>
             </div>
            
        </div>
    );
}

export default HeroSection;