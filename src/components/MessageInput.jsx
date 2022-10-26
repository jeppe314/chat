import React, { useContext, useRef } from "react"
import { FiSend } from "react-icons/fi"
import { ChatContext } from "../context/ChatContext"

export const MessageInput = () => {
  const { data } = useContext(ChatContext)
  const inputRef = useRef()

  const handleClick=  () => {
    console.log(inputRef.current.value)
  }

  return (
    <div className="messageInput">
      <textarea spellCheck="false" placeholder="Say hi!" ref={inputRef}/>
      <button className="sendBtn" onClick={handleClick}>
        <FiSend />
      </button>
    </div>
  )
}
