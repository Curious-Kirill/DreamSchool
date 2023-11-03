import React from 'react'
import LogoBlack from '../assets/LogoBlack.png'

const footer = () => {
  return (
    <div className='h-[200px]  '>
      <div className=' flex max-w-6xl my-auto mx-0'>
        <div className='pl-20'>
          <img src={LogoBlack} />
        </div>
        <ul className=' footer flex pt-[130px] pl-60  text-black'>
          <li>Вконтакте</li>
          <li>WhatsApp</li>
          <li>Телеграм</li>

        </ul>
      </div>
    </div>
  )
}

export default footer
