import React from "react"
import { MessageInput } from "./MessageInput"
import { Convo } from "./Convo"
import { ChatHeader } from "./ChatHeader"

export const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <Convo />
      <MessageInput />
    </div>
  )
}
