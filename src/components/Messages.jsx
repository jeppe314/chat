import React, { useContext } from "react"
import { Message } from "./Message"
import { ChatContext } from "../context/ChatContext"

export const Messages = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className="messages">
      <Message message="morjens chifu" />
      <Message />
      <Message />
    </div>
  )
}
