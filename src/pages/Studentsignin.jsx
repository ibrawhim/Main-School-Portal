import React from 'react';
import fully from '../Images/fully.jpg'

const Studentsignin = () => {
  return (
    <>
    <div>
        <section>
            <div>
                <h1>SIGN IN</h1>
                <form action="" className='flex flex-col'>
                    <input type="text" />
                    <input type="text" />
                    <button>Sign In</button>
                </form>
            </div>
            <div>
                <img src={fully} alt="" width={600} />
            </div>
        </section>
    </div>
    </>
  )
}

export default Studentsignin