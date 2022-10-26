import React, { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"

export const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [message])

  return (
    <div
      className={`message ${message.sender === currentUser.uid ? "owner" : "receiver"}`}
      ref={ref}
    >
      <img
        src={message.sender === currentUser.uid ? currentUser.photoURL : data.user.photoURL}
        alt=""
      />
      <p className="speechBubble">{message.text}</p>
    </div>
  )
}
