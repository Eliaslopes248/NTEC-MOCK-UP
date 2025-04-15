
import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { colors } from '../colors';



function NavBar(props) {

const navOptions = [
    {name:'Home', route:''},
    {name:'About',route:''},
    {name:'Founder', route:''},
    {name:'Contact', route:''},
]

    return (
        <div className="">
            <div className={`w-[100vw] h-[20px] bg-[#313659]`}></div>
            <div className='w-[100vw] p-[0px] border-0 h-[70px] max-h-[100px] flex items-center'>
                <div className="p-[10px] border-2 w-fit text-blue-950 ml-[2vw]">logo</div>

                    <div className=" flex gap-[30px] ml-[7vw]">
                    {
                        navOptions.map(opt =>{
                            return <a href={opt.route} className='text-blue-950'>{opt.name}</a>
                        })
                    }
                    </div>


                <button className='border-0 h-full w-[150px] ml-auto bg-green-600 text-white font-extralight text-[15px]'>
                    <div className="flex gap-[10px] justify-center items-center">
                        <p>Order Now</p>
                        <FaArrowTrendUp/>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default NavBar;