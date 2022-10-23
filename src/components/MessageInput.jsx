import React from "react"

export const MessageInput = () => {
  return (
    <div className="messageInput">
      <textarea spellCheck="false" placeholder="Say hi!" />
      <button className="sendBtn">Send</button>
    </div>
  )
}
