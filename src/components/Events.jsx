import React from 'react'
import Event1 from '../assets/Event1.png'
import Event2 from '../assets/Event2.png'
import Event3 from "../assets/Event3.png"
import Event4 from '../assets/Event4.png'


const Events = () => {
  return (
    <div className='h-700px w-full mx-auto max-w-[1300px] bg-white'>
      <div className='flex flex-col my-0 pl-[3%] pr-[3%]'>
      <div><p className='events   ml-[120px] mb-[50px]' >Мероприятия</p> </div>
      <div className='flex gap-x-2 h-[500px]' >
        <div className=' event flex bg-cover h-[550px] w-[381px]  bg-center bg-no-repeat' style={{backgroundImage:`linear-gradient(289deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.2) 100%),url(${Event1})`}} >
          <h1 className='pl-6 pt-9' id="openDay">День<br/> открытых <br/> дверей</h1>
        </div>

        <div className=' event flex bg-cover h-[550px] w-[381px]  bg-center bg-no-repeat' style={{backgroundImage:`linear-gradient(289deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.2) 100%),url(${Event2})`}} >
          <h1 className='pl-6 pt-9' id="openDay">День<br/> учителя</h1>
        </div>

        <div className=' event flex bg-cover h-[550px] w-[381px]  bg-center bg-no-repeat' style={{backgroundImage:`linear-gradient(289deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.2) 100%),url(${Event3})`}} >
          <h1 className='pl-6 pt-9' id="openDay">1 сентября<br/> День знаний</h1>
        </div>

        <div className=' event flex bg-cover h-[550px] w-[381px]  bg-center bg-no-repeat' style={{backgroundImage:`linear-gradient(289deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.2) 100%),url(${Event4})`}} >
          <h1 className='pl-6 pt-9' id="openDay">Летний<br/> лагерь</h1>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Events
