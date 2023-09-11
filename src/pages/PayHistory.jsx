import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const PayHistory = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.mystatus){
      navigate('/student/signin')
    }
  }, [])
  return (
    <div>PayHistory</div>
  )
}

export default PayHistory