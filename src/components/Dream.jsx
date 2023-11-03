import React from 'react'

const Dream = () => {
  return (
    <div className='h-[700px] relative   box-border bg-white'>
     

      <div className='absolute top-[30%]  '>
      
      <div className='flex flex-col'>
     
      <div className='flex flex-row '> 
      <div className='dream mr-[10rem] my-auto mx-0 relative box-border w-fit'>
        <p  >
          Мечта
        </p>
      </div>
<div className='goalsCont flex justify-between w-[65rem]'>

<div className='flex h-fit goalsDiv goalsDiv1  text-black w-[30%] flex-col'>
 <h1 className='goals'>Цели нашей школы</h1>
 <p className='goals-text'>Раскрытие внутреннего потенциала ребенка, целостное формирование личности на основе культурных традиций</p>


 </div>
 <div className='flex h-fit goalsDiv goalsDiv2   text-black w-[30%] flex-col'>
 <h1 className='goals'>5 лет 
преподавания</h1>
 <p className='goals-text'>Наша школа работает с 2018 года и мы такие молодцы что просто пипец</p>


 </div>
 <div className='flex h-fit  goalsDiv  text-black w-[30%] flex-col'>
 <h1 className='goals'>Безопасность детей</h1>
 <p className='goals-text'>Отдельно стоящее здание с собственной закрытой территорией</p>


 </div>
 </div>

 </div> 
 <div className='flex items-center pt-12 pl-[30rem] content-center '>
  <button className=' text-black mx-auto advantages' >Посмотреть преимущества</button>
 </div>


      </div>
       
      
      </div>
     
    </div>
  )
}

export default Dream
