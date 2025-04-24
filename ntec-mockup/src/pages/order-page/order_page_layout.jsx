import React from 'react'

export default function Order_page_layout() {
  return (
    <div className='w-[100vw] h-[100vh] bg-gray-100 p-[30px] gap-[20px] flex flex-col'>

        {/* top section to select ev type */}
        <div className="w-full h-[10vh] border-0 flex shadow-2xl"></div>

        {/* container to hold row layout */}
        <div className=" flex w-full gap-[30px]">

             {/* left zone for dynamic ev stats */}
            <div className="w-[30vw] max-w-[550px] h-[70vh] border-0 shadow-2xl"></div>

            {/* right zone for users to make ev modifications */}
            <div className="w-[80vw] max-w-[1000px]  h-[70vh] border-0 flex flex-col shadow-2xl"></div>


        </div>
       


    </div>
  )
}
