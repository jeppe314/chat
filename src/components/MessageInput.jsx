import React from "react"
import { FiSend } from "react-icons/fi"

export const MessageInput = () => {
  return (
    <div className="messageInput">
      <textarea spellCheck="false" placeholder="Say hi!" />
      <button className="sendBtn">
        <FiSend />
      </button>
    </div>
  )
}
