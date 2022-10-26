import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"
import { Messages } from "./Messages"

export const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  return (
    <div className={`message ${message.sender === currentUser.uid ? "owner" : "receiver"}`}>
      <img
        src={message.sender === currentUser.uid ? currentUser.photoURL : data.user.photoURL}
        alt=""
      />
      <p className="speechBubble">{message.text}</p>
    </div>
  )
}
