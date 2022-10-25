import React, { useContext } from "react"
import { MessageInput } from "./MessageInput"
import { Convo } from "./Convo"
import { ChatHeader } from "./ChatHeader"
import { ChatContext } from "../context/ChatContext"

export const Chat = () => {
  const { data } = useContext(ChatContext)

  console.log(data)

  return (
    <div className="chat">
      <ChatHeader data={data} />
      <Convo />
      <MessageInput />
    </div>
  )
}
