import React from 'react'
import student from '../Images/students.gif'
import { useFormik } from "formik";
import * as Yup from 'yup'
import {Link} from 'react-router-dom'



const StudentSignUp = () => {
    let formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone: '',
            dob: ''
        },
        onSubmit: (values)=>{
            console.log(values);
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Field is empty'),
            lastname: Yup.string().required('Field is empty'),
            email: Yup.string().required('Field is empty').email('Enter an email address'),
            password: Yup.string().required('Field is empty'),
            phone:  Yup.number().typeError('Please enter a valid number').required('Field is empty'),
            dob: Yup.date().required('date of birth is required')
        })
    })
  return (
    <>
        <div className='lg:ps-5'>
            <section className='grid lg:grid-cols-2 lg:my-5 md:grid-cols-2 sm:grid-cols-1 justify-content-center align-items-center'>
                <div className='grid p-4 '>
                <h1 className='font-bold text-3xl'>SIGN UP</h1>
                    <form action="" onSubmit={formik.handleSubmit} className='border-4 border-cyan-500 rounded-xl grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 w-96 p-2 my-2'>
                        <label htmlFor="Firstname">Firstname</label>
                        <input  type="text" className={formik.touched.firstname && formik.errors.firstname ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800'}  name='firstname' placeholder='firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <small className="text-red-500">{formik.touched.firstname && formik.errors.firstname}</small>
                        <label htmlFor="Firstname">Lastname</label>
                        <input type="text"  className={formik.touched.lastname && formik.errors.lastname ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800'}  name='lastname'  placeholder='lastname' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500">{formik.touched.lastname && formik.errors.lastname}</small>
                        <label htmlFor="email">Email</label>
                        <input type="text"  className={formik.touched.email && formik.errors.email ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800'}  name='email'  placeholder='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500">{formik.touched.email && formik.errors.email}</small>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text"  className={formik.touched.phone && formik.errors.phone ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800'}  name='phone'  placeholder='Phone no:' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500">{formik.touched.phone && formik.errors.phone}</small>
                        <label htmlFor="Firstname">Date of Birth</label>
                        <input type="date"  className={formik.touched.dob && formik.errors.dob ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800'}  name='dob' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500">{formik.touched.dob && formik.errors.dob}</small>
                        <label htmlFor="password">Password</label>
                        <input type="text"  className={formik.touched.password && formik.errors.password ? 'border-2 p-2 caret-red-400 rounded border-red-500': 'border-2 p-2 caret-cyan-400 rounded border-cyan-800'}  name='password'  placeholder='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <small className="text-red-500">{formik.touched.password && formik.errors.password}</small>
                        <button type='submit' className='bg-cyan-800 my-2 p-1 text-white font-bold rounded'>Sign Up</button>
                        <div className='flex justify-between'>
                            <p>Have an Account?</p>
                            <Link className='underline' to="/student/signin">Sign In Here</Link>
                        </div>
                    </form>
                </div>
                <div>
                    <img src={student} width={450} alt="" />
                </div>
            </section>
        </div>
    </>
  )
}

export default StudentSignUp 