import React from 'react'
import globus from '../assets/globus.png'

const Goals = () => {
  return (
    <div className=' globus h-[500px] bg-center tex-black bg-no-repeat bg-cover' style={{backgroundImage:`linear-gradient(289deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 100%),   url(${globus})`}}>
       <div className=' pl-20 pt-[10rem]'>
       <p className='w-[700px]' id="goals-text">Цели нашей школы - совместное образование и воспитание детей для их духовного и ментального становления в свободную творческую личность.

Мы стараемся концентрироваться на созидательных действиях, создающих возможности, перспективы и потенциал для наших детей.

Мы сеем зерна нового созидательного общества: сильного духом, чувствующего свои родовые связи, готового к созидательному труду, верящего в свои силы.</p>
        </div>
    </div>
  )
}

export default Goals
