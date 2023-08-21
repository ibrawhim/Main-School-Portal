import React from 'react'
// import student from '../Images/students.gif'
import indians from '../Images/indians.jpg'
import Div from '../components/Div'

const Landing = () => {
    let myFont = {
        fontFamily: 'Quicksand'  
      }

  return (
    <>
        <div>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:my-16'>
                <div className='m-7'>
                   <h1 style={myFont}  className='text-6xl lg:mt-9 font-bold text-center'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</h1>
                </div>
                <div className='m-3'>
                    <img className='rounded-lg' src={indians} alt="" />
                </div>
            </section>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                <Div name='Wonders of Education' title='Education is a journey of enlightenment, a path paved with countless benefits that enrich our lives in remarkable ways. Beyond the confines of classrooms and lecture halls, it is a force that shapes individuals and society, fostering growth, progress, and understanding.' title2='At its core, education is empowerment. It equips individuals with the knowledge and skills needed to navigate lifes complexities. It empowers us to make informed decisions, enabling us to take charge of our destinies. Education is the key that unlocks doors to opportunities we might never have imagined.' title3='One of educations most awe-inspiring features is its capacity to foster innovation. From scientific breakthroughs to technological marvels, education fuels progress. It encourages the curious to ask Why? and the bold to ponder What if? The results are inventions, discoveries, and solutions that transform the world.' style='bg-cyan-800 rounded-md text-white text-justify'/>
                <Div name='Other Wonders of Education' title='Environmental stewardship is another remarkable facet of education. It inspires the next generation to protect and preserve our planet. It educates us about the consequences of our actions and empowers us to make environmentally conscious choices.' title2='Beyond its practical applications, education serves as a guardian of cultural heritage. It preserves traditions, languages, and historical knowledge, passing them down from one generation to the next. In doing so, it ensures the continuity of our rich tapestry of human history.' title3='Character development is an integral part of education. It instills values and ethics, shaping individuals into responsible, compassionate, and ethical citizens. Education not only equips us with knowledge but also with a moral compass.' style='bg-black text-white border-2 rounded-md text-justify'/>
            </section>
        </div>
    </>
  )
}

export default Landing