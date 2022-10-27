import React, { useContext } from "react"
import { MessageInput } from "./MessageInput"
import { Messages } from "./Messages"
import { ChatHeader } from "./ChatHeader"
import { ChatContext } from "../context/ChatContext"
import { Sidebar } from "./Sidebar"

export const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className="chat">
      <ChatHeader data={data} />
      <div className="content">
        <Sidebar />
        <div className="chatWrapper">
          <Messages />
          <MessageInput />
        </div>
      </div>
    </div>
  )
}
