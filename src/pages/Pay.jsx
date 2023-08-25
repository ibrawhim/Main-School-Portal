import React, { useState } from 'react'
import nav from '../Images/nav.png'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';




const Pay = () => {
  
  
  const hideSideBar = () => {
    console.log(sidebar);
    
    document.querySelector('.sidebar').style.width = '100%';
    document.querySelector('.content').style.display = 'none';
  }

  
  const [myemail, setmyemail] = useState('')
  const [myamount, setmyamount] = useState('')
  const [myfirstname, setmyfirstname] = useState('')
  // const [mylastname, setmylastname] = useState('')
  const [myphone, setmyphone] = useState('')

  // const config = {
  //   public_key: 'FLWPUBK_TEST-d796a7ec57d65fcfeabb5a113a43d57b-X',
  //   tx_ref: Date.now(),
  //   myamount,
  //   currency: 'NGN',
  //   payment_options: 'card,mobilemoney,ussd',
  //   customer: {
  //     myemail,
  //     myphone,
  //     myfirstname,
  //   },
  //   customizations: {
  //     title: 'My tuition',
  //     description: 'Payment for tuition',
  //     logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
  //   },
  // };

  // const fwConfig = {
  //   ...config,
  //   text: 'Pay with Flutterwave!',
  //   callback: (response) => {
  //      console.log(response);
  //     closePaymentModal() // this will close the modal programmatically
  //   },
  //   onClose: () => {},
  // };

  const config = {
    public_key: 'FLWPUBK_TEST-d796a7ec57d65fcfeabb5a113a43d57b-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'ade@gmail.com',
       phone_number: '07055555555',
      name: 'john doe',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
            <main className="content grid border border-cyan-500 p-0">
            {/* <div className='bg-cyan-800 py-3 mb-0 flex justify-between pe-3 h-12'>
            <button className='block md:hidden lg:hidden rounded  text-white' onClick={hideSideBar}><img className='text-white' src={nav} alt="" width={25}/></button>
                <p className='text-white'>Name</p>
                <p className='text-white'>image</p>
            </div> */}
            <h1 className='font-bold'>PAY</h1>
            <div className='shadow rounded-xl lg:w-1/2 md:w-1/2 sm:w-2/3   mb-72 mx-auto p-2'>
              <form action="" id='paymentForm'>
            <div className='my-2'>
                  <label htmlFor="firstname">Firstname:</label>
                  <input type="text" className='text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmyfirstname(e.target.value)} value={myfirstname}/>
                </div>
                {/* <div className='my-2'>
                  <label htmlFor="lastname">Lastname:</label>
                  <input type="text" className='text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmylastname(e.target.value)} value={lastname}/>
                </div> */}
                <div className='my-2'>
                  <label htmlFor="phone">Phone:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmyphone(e.target.value)} value={myphone}/>
                </div>
                <div className='my-2'>
                  <label htmlFor="email">Email:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmyemail(e.target.value)} value={myemail}/>
                </div>
                <div className='my-2'>
                  <label htmlFor="amount">Amount:</label>
                  <input type="text"  className=' text-cyan border-cyan-800 border-2 w-full rounded border' onChange={(e)=>setmyamount(e.target.value)} value={myamount}/>
                </div>
                
                <button className='bg-cyan-800 w-full rounded text-white my-2 py-2' onClick={() => {handleFlutterPayment({callback: (response) => {
               console.log(response.status);
                closePaymentModal()},
            onClose: () => {
              console.log('closed');
            },
          });
        }}>Pay with flutterwave </button>
                </form>
            </div>
        </main>
    </>
  )
}

export default Pay