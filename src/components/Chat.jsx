import React, { useContext } from "react"
import { MessageInput } from "./MessageInput"
import { Messages } from "./Messages"
import { ChatHeader } from "./ChatHeader"
import { ChatContext } from "../context/ChatContext"

export const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className="chat">
      <ChatHeader data={data} />
      <Messages />
      <MessageInput />
    </div>
  )
}
