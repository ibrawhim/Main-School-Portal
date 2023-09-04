import React, { useEffect, useState } from 'react'
import {BsSend} from 'react-icons/Bs'



const Chat = ({socket}) => {
    const [message, setmessage] = useState("")
    const [allmessages, setallmessages] = useState([])
    useEffect(() => {
     if(socket.current){
       socket.current.on("broadcastMsg",(receivedMessage)=>{
        //  console.log(receivedMessage);
         setallmessages([...allmessages,receivedMessage])
       })
      }
    }, [])
    
    const sendMessage = () => {
      socket.current.emit("sendMsg",message)
    }
  return (
    <>
    <div>
      <div className='flex justify-center items-center'>
        <input type="text" onChange={(e)=>setmessage(e.target.value)} value={message} className='border border-black p-3'/>
        <button className='bg-black p-2 text-white my-1' onClick={sendMessage}><BsSend/></button>
      </div>
        <div>
          {allmessages.map((msg,index)=>(
            <div key={index}>
              {index}
              {msg}
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Chat