import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
        <div className='w-full h-screen'>
            <section>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-12 border-2'>
                    <div className='bg-cyan-800 p-5'>
                    <h4 className='text-sky-200 font-bold text-xl'>Welcome to [School Name] - Empowering Tomorrow's Leaders</h4>
                    <p className='text-justify font-semibold'>At [School Name], we believe that education is the key to unlocking a brighter future. Our school portal is more than just a digital platform; it's a gateway to the heart and soul of our educational community. We invite you to explore this page and discover what makes our institution a beacon of knowledge, innovation, and excellence.

                    As you embark on this virtual journey through our school's rich history, mission, and values, you'll gain insights into our commitment to nurturing young minds, fostering a culture of learning, and preparing students to become the leaders of tomorrow. Whether you are a student, parent, teacher, or curious visitor, we're thrilled to have you here.

                    Join us in celebrating our collective dedication to academic achievement, personal growth, and the pursuit of knowledge. Together, we are building a brighter future, one inspired student at a time. Welcome to [School Name], where learning knows no bounds, and possibilities are limitless.</p>
                    <Link className=' text-sky-200 underline rounded-3xl' to="/">Go Home</Link>
                    </div>
                    <div className='bg-sky-200 p-5'>
                        <h4 className='text-cyan-800 font-bold text-xl'>Our Brand Story: [School Name] - Where Dreams Take Flight</h4>
                        <p className='text-justify font-semibold'>
                        In the heart of [City/Town Name], there exists a place where dreams take flight, where knowledge is the wind beneath young wings, and where the journey of education knows no bounds. Welcome to [School Name], a legacy of learning, innovation, and community.

                        Our story begins decades ago when a group of visionary educators and passionate advocates for children's education came together with a shared dream: to create a school where every child could not only learn but also flourish, a place where curiosity is celebrated, and individuality is treasured.

                        Since our inception in [Year of Establishment], [School Name] has been a beacon of academic excellence and holistic development. We have cultivated a nurturing environment where students are encouraged to explore their passions, embrace challenges, and spread their wings wide. From the moment they step through our doors, they become part of a vibrant family that supports, inspires, and empowers.

                        Over the years, we've witnessed countless success stories, where students have transformed into leaders, artists, scientists, and change-makers. Our dedicated faculty, staff, and administration have played an instrumental role in shaping these young minds, instilling values of integrity, resilience, and empathy that will serve them for a lifetime.

                        Our commitment to excellence extends beyond the classroom. We take pride in our vibrant extracurricular programs, community outreach initiatives, and the strong bonds of friendship that form within our school's walls. We are not just an institution; we are a community united by a shared mission: to prepare our students for a world of opportunities and challenges.

                        At [School Name], we embrace innovation and adapt to the changing landscape of education. Our school portal is a testament to our dedication to providing the best possible resources and support to our students and their families. It's a virtual bridge that connects our community and provides a window into the incredible journey of learning and growth happening within our walls.

                        As we continue to evolve and embrace the future, our core values remain steadfast: a commitment to academic excellence, a passion for creativity and critical thinking, and an unwavering belief that every child has the potential to achieve greatness.

                        Join us in celebrating our brand story, where every day is an opportunity to learn, grow, and inspire. Together, we are shaping a brighter future, one student at a time. Welcome to [School Name], where dreams take flight, and the sky is the limit.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default About