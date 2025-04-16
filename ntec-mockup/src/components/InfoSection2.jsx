import chemistry from '../assets/original-white-watermarks.png';
import React from 'react';

function InfoSection2(props) {

    // add card info here
    const techCards = [1,2,3]

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
                        return <div className=" border-2 h-[80%] min-w-[250px] w-[20%] max-w-[300px]"></div>
                    })
                }
            </div>

        </div>
    );
}

export default InfoSection2;