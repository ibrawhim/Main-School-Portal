import React, { useEffect, useRef, useState } from 'react'
import socketClient from 'socket.io-client'



const Chat = () => {
    const [message, setMessage] = useState("")
    const [allMessages, setAllMessages] = useState([])
    let socket = useRef(0)
    // console.log(socket.current);

    let endpoint = 'https://main-school-portal.onrender.com/'
    useEffect(() => {
        socket.current = socketClient(endpoint)
        if(!localStorage.mystatus){
                  navigate('/student/signin')
        }else if(socket.current){

            socket.current.on("broadcastMsg", (receivedMessage)=>{
                setAllMessages([...allMessages, receivedMessage])
                console.log(receivedMessage);
            })
        }
    })

    const sendMessage =()=>{
        // console.log(message);
        socket.current.emit("sendMsg", message)
            // console.log(message);
        }
    

  return (
    <>
    <div>
    <div className='bg-danger'>
                {
                    allMessages.map((msg, index)=>(
                        <div key={index}>
                        {msg}
                        </div>
                        ))
                    }
            </div>
            <input type="text" onChange={(e)=> setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send Message</button>
      
    </div>
        

    </>
  )
}

export default Chat

