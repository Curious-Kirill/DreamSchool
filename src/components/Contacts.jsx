import React from 'react'
import Mapp from '../assets/Mapp.png'


const Contacts = () => {
  return (
    <div className= 'h-[700px]  '>
      <div className='flex mainContainer relative top-[20%]'>

      <div id="contcts" className='dream mr-[10rem]  my-auto mx-0 relative box-border w-fit'>
        <p className="contacts"  >
          Контакты
        </p>
      </div>
      
      <div className='flex flex-col contactDiv w-[400px] mt-[3rem]  flex-wrap content-evenly  '>
      
      <div className='absolute svg1Div top-[-0.1rem] left-[26rem]   '>
 <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="1150" height="1" viewBox="0 0 1150 1" fill="none">
  <path d="M0 0.5H1288" stroke="black"/>
</svg>   
        </div>


      <p className='phone '>  Телефон: <span className='number'> +7 (960) 368 52 13   </span>  </p>  
      <p className='phone pt-10'>  Вконтакте: <span className='number'>semeinaya_shkola_73   </span>  </p>
      <p className='phone pt-10  '>  Адрес:<br/> <span className='number'> г. Ульяновск,<br/> пр-т Генерала Тюленева, д.20   </span>  </p>
      <div className='butt1Div pt-[74px]'>
          <button className='butt1 text-white px-12 absolute py-6  items-center bg-black'>Записаться на консультацию</button>
      
          </div>
          
          <div className='pt-[8rem]'><svg className='svg2' xmlns="http://www.w3.org/2000/svg" width="612" height="2" viewBox="0 0 612 2" fill="none">
  <path d="M0 1H612" stroke="black"/>
</svg></div>
          
            
        
      
 
      
          
      </div>

        <div className='pt-14 pl-[8rem] mapDiv h-fit' >
          <img className='h-[410px] map bottom-0' src={Mapp} ></img>
        </div>
            
      </div>
    </div>
    
  )
}

export default Contacts
