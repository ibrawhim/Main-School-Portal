import React from 'react'
import {Link} from 'react-router-dom'


let myDiv = {
    position: 'relative',
    width: '100vw',
    height: '80vh'
}

let mySecondDiv = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
const Error = () => {
  
  return (
    <>
        <div style={myDiv}>
            <div style={mySecondDiv}>
                <h1 className='text-9xl'>Error Page!</h1>
                <p className='my-5 mx-auto'>This Page does not Exist</p>
                <Link className='underline mx-auto' to="/">Go back home</Link>
            </div>
        </div>
    </>
  )
}

export default Error