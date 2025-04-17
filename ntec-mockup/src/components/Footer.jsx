import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';


export default function Footer() {

  const boxes = [
      {
        location:'Greensboro, NC',
        email:'DreamsCollective.fake@gmail.com',
        phone: '321-535-8980',
        address:'1233 Mapel Dr, Greensboro NC'
      },
      {
        location:'Greensboro, NC',
        email:'DreamsCollective.fake@gmail.com',
        phone: '321-535-8980',
        address:'1233 Mapel Dr, Greensboro NC'
      },
  ]

  const socials = [
    {
      icon: <FaInstagram size={30} className="text-gray-600 hover:text-pink-500" />,
      link: 'https://www.instagram.com'
    },
    {
      icon: <FaFacebook size={30} className="text-gray-600 hover:text-blue-600" />,
      link: 'https://www.facebook.com'
    },
    {
      icon: <FaLinkedin size={30} className="text-gray-600 hover:text-blue-500" />,
      link: 'https://www.linkedin.com'
    }
  ];

  return (
    <div className='w-[100vw] h-[40vh] bg-white flex pt-[40px]'>

      <div className="border-0 w-[25vw] h-full 2xl:ml-[20vw] p-[30px]">
        <h1 className='text-5xl '>NTEC By Kameron Burton</h1>
      </div>

      {
        boxes.map(box =>{
          return <div className="border-0 w-[25vw] h-full 2xl:ml-[20vw] p-[30px] flex flex-col gap-[20px]">
            <p>{box.location}</p>
            <a href='' className='underline'>{box.email}</a>
            <p>{box.phone}</p>
            <a href='' className='underline'>{box.address}</a>
          </div>
        })
      }

      
      <div className="border-0 w-[25vw] h-full 2xl:ml-[20vw] p-[30px] flex flex-col justify-center">
          <div className=" flex gap-[30px]">
            {
              socials.map(icon =>{
                return icon.icon
              })
            }
          </div>
      </div>
      



    

    </div>
  )
}
