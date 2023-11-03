import React from 'react'
import logo from '../assets/Logo.png'


const Navbar = () => {
  return (
    <div  className="absolute navbarDiv w-[100%] h-[80px] pt-[100px] flex px-4 justify-between items-center pr-[50px] ">
      <div className='relative  left-[20px]'>
        <img className='logo1' src={logo} />
      </div>
      <ul className='flex'>
        <li>О нас</li>
        <li>Мероприятия</li>
        <li>Контакты</li>
        <li>Отзывы</li>
      </ul>
    </div>
  )
}

export default Navbar
