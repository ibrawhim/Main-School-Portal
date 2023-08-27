import React from 'react';
import photo from '../Images/photo.jpeg'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



const Studentsignin = () => {
    let navigate = useNavigate()

    // let mee =  `UNI2023${Math.round(Math.random()*10000)}`
    // console.log(mee);

    let myDiv = {
        minWidth: '100vw',
        // marginBottom: '10%',
        // height: '60vh',
        backgroundColor: '#e5e7eb'
    }
    let url = 'http://localhost:4223/student/signin'

    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values)=> {
            // console.log(values);
            axios.post(url,values)
            .then((response)=>{
                // console.log(result);
                if(!response.data.status){
                    console.log(response.data.message);
                }else {
                    localStorage.token = response.data.token
                    navigate('/portal/dash')
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Field is empty').email('Enter an email address'),
            password: Yup.string().required('Field is empty'),
        })

    })
    // console.log(formik.touched);
  return (
    <>
    <div style={myDiv} className='overflow-hidden'>
        <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center border border-red-900'>
            <div className='grid justify-center mt-20'>
                <form action="" onSubmit={formik.handleSubmit} className='flex flex-col w-96 shadow-2xl p-6 rounded-2xl'>
                <h1 className='text-cyan-400'>SIGN IN</h1>
                    <input type="text" placeholder='name@mail.com' className={formik.touched.email && formik.errors.email ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800 my-2'} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className='text-red-500'>{formik.touched.email && formik.errors.email}</small>
                    <input type="text" placeholder='Password' className={formik.touched.password && formik.errors.password ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800 my-2'} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <small className='text-red-500'>{formik.touched.password && formik.errors.password}</small>
                    <button type='submit' className='bg-cyan-900 p-2 rounded text-white'>Sign In</button>
                </form>
            </div>
            <div className='me-10'>
                <img src={photo} className='rounded-2xl m-4 sm:m-2 md:m-8  lg:mx-6 xl:m-10' alt=""/>
            </div>
        </section>
    </div>
    </>
  )
}

export default Studentsignin