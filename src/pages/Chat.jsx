import React, { useState } from 'react'

const Chat = ({socket}) => {
    const [message, setmessage] = useState("")

    const sendMessage = () => {
        socket.current.emit('send Msg',message)
    }

  return (
    <>
        <div>
            <input type="text" onChange={(e)=>setmessage(e.target.value)}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    </>
  )
}

export default Chat