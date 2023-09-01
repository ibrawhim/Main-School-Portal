import React, { useState } from 'react'


const Chat = ({socket}) => {
    const [message, setmessage] = useState("")
  return (
    <>
    <div>
        <input type="text" onChange={(e)=>setmessage(e.target.value)}/>
        <button>SendMessage</button>
    </div>
    </>
  )
}

export default Chat