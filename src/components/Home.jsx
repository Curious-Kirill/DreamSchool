import backgroundImg from '../assets/Rectangle.png'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
  <div style={{backgroundImage:`linear-gradient(289deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.2) 100%),url(${backgroundImg})`}} 
  id="home" className=' flex bg-center bg-no-repeat max-h-[1100px]   bg-cover h-screen w-full  '>
  <Navbar />
      <div className='flex homeDiv max-w-[1000px] w-full h-fit  ml-[300px] mt-[12rem]'>

      
      <div className=' flex  flex-col   ' >
          <div className='descr text-[96px] font-bold'>
           <p>Cемейная школа <br/> Мечта</p>
          </div>
          <div className='pt-4'>
            <p id="dream">Мечта, если дать ей волю, всегда <br/>
                одолеет реальность</p>
          </div>
          <div className=' button1 pt-[74px]'>
          <button className='butt1 text-white px-12 absolute py-6  items-center bg-black'>Оставить заявку</button>
      
          </div>

          

      </div>
        
     
      </div>

    </div>
  )
}

export default Home
