import { GiMedicines } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import cows from '../assets/cows.jpg';
import React from 'react';

function HeroSection(props) {
    return (
        <div className="relative w-[100vw] h-[60vh] overflow-hidden bg-[#313659]">
            {/* Background image */}
            <img src={cows} alt="Cows" className="absolute top-0 left-0 w-full h-full object-cover z-[1]" />

            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full z-[2] bg-gradient-to-b from-black/70 to-black/30"></div>

            {/* Text component holder */}
            <div className="flex justify-center h-full w-full items-center border-2 border-white">
        
                <div className=" top-0 left-0 w-full h-full flex flex-col justify-center items-start z-[3] p-[5vw] xl:ml-[10vw] 2xl:ml-[20vw]">
                    <p className="text-green-600 mb-[10px] font-normal">NTEC Entrepreneurship</p>
                    <h1 className="text-white text-3xl md:text-5xl max-w-[600px] 2xl:max-w-[650px]">
                        Revolutionizing Drug & Therapeutic Consumption and Manufacturing
                    </h1>
                    <p className="text-white font-extralight mt-[2vh] max-w-[600px]">
                        We offer optimized EV manipulation to help enhance consumer experience
                    </p>

                    {/* Icons and button holder */}
                    <div className="flex gap-[40px] xl:gap-[30px] items-center h-[70px] mt-[2vh] max-w-[500px]">
                        <GiMedicines className="text-white text-[50px] xl:text-[70px]" />
                        <FaShippingFast className="text-white text-[50px] xl:text-[70px]" />
                        <GiCow className="text-white text-[70px] xl:text-[80px]" />
                        <button className="bg-green-600 hover:bg-green-500 p-[10px] h-[80%] w-[150px] ml-auto text-white font-extralight text-[15px]">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Mini text box */}
                <div className=" ml-auto mr-[5vw] bg-white p-[15px] h-[40vh] w-[19vw] min-w-[250px] max-w-[350px] flex flex-col items-center z-[3] lg:mr-[10vw] 2xl:mr-[30vw] shadow-3xl">
                    <GiCow className="text-[100px]" />
                    <p className="font-black">Milk EV's</p>
                    <p className="font-extralight mt-[2vh] text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat rerum neque sapiente ab.
                    </p>
                    <FaCheckCircle className="text-green-600 text-[30px] mt-[3vh]" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;