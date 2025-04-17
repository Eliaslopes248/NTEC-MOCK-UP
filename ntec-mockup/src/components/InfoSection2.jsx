import chemistry from '../assets/original-white-watermarks.png';
import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai';
import { GiChemicalDrop } from 'react-icons/gi';

function InfoSection2(props) {

    // add card info here
    const techCards = [
        {
            icon: <FaFilter size={50} className="text-blue-500" />, // Use Tailwind class for color
            title: 'EV Isolation',
            text: 'Ensures that only functional, pure EVs are used for delivery—critical for both drug development and agricultural sprays.'
        },
        {
            icon: <AiOutlineRobot size={50} className="text-teal-400" />, // Use Tailwind class for color
            title: 'AI & Machine Learning',
            text: 'Predictive modeling and omics integration help optimize EV cargo selection, target delivery, and therapeutic outcomes.'
        },
        {
            icon: <GiChemicalDrop size={50} className="text-yellow-500" />, // Use Tailwind class for color
            title: 'Nanotech & Surface Engineering',
            text: 'Functionalizing EVs for targeted delivery and stability using chemical modifications, ligands, or fusogenic elements.'
        }
    ];

    return (
        <div className="w-[100vw] h-[100vh] mt-[10vh]">
            {/* Hold bg img */}
            <div className="relative bg-gray-200 w-full h-[40%] overflow-hidden">
                {/* Background image */}
                <img
                    src={chemistry}
                    alt=""
                    className="object-cover top-0 left-0 w-full h-full z-[1]"
                />
                {/* Subtext and headers */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-[2]">
                    <p className="text-lg text-green-600 font-extralight mt-2">
                        Innovative solutions for modern challenges
                    </p>
                    <h1 className="text-3xl font-bold text-gray-900 mt-2.5">How we make it happen?</h1>
                    
                </div>
            </div>

            {/* card holder */}
            <div className="w-[100vw] h-[50vh] border-0 flex items-center justify-center gap-[35px]">
                {/* hold 3 cards of technologies */}
                {
                    techCards.map(card=>{
                        return <div className=" border-0 flex flex-col  h-[80%] min-w-[250px] w-[20%] p-[20px] justify-around  max-w-[300px] bg-gray-100 shadow-2xl">
                            {card.icon}
                            <h3 className='font-extralight text-[20px]'>{card.title}</h3>
                            <p className='text-gray-400'>{card.text}</p>
                        </div>
                    })
                }
            </div>

        </div>
    );
}

export default InfoSection2;