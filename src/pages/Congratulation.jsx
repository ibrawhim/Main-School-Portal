import axios from 'axios'
import { Link } from 'react-router-dom'




const Congratulation = () => {
    // let endpoint = 'http://localhost:4223/student/signup'

    let myDiv = {
        position: 'relative',
        width: '100vw',
        height: '100vh'
    }
    let mySec = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    let result = JSON.parse(localStorage.getItem('myResult'))
    let name = (result.myName);
  return (
    
    <>
       <div className='bg-cyan-800 border' style={myDiv}>
        <section style={mySec}>
            <div>
                <h1 className='text-3xl my-4'>Sign Up Successful</h1>
                <p className='text-green-600 text-xl lg:text-center my-4'>Welcome {name}</p>
                <Link className='my-4 lg:ms-10 font-bold underline animate_animated animate__pulse' to="/student/signin">Click here to Sign In</Link>
            </div>
        </section>
        </div>
    </>
  )
}

export default Congratulation