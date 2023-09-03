import React, { useEffect, useState } from 'react'



const Chat = ({socket}) => {
    const [message, setmessage] = useState("")
    useEffect(() => {
     
    }, [])
    
    const sendMessage = () => {
      console.log(message);
      socket.current.emit("sendMsg",message)
    }
    socket.current.on("broadcastMsg",(receivedMessage)=>{
      console.log(receivedMessage);
    })
  return (
    <>
    <div>
        <input type="text" onChange={(e)=>setmessage(e.target.value)}/>
        <button onClick={sendMessage}>SendMessage</button>
    </div>
    </>
  )
}

export default Chat