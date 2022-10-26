import React, { useContext, useState, useEffect, useRef } from "react"
import { Message } from "./Message"
import { ChatContext } from "../context/ChatContext"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
export const Messages = () => {
  const { data } = useContext(ChatContext)
  const [messages, setMessages] = useState([])
  const [visibleMessages, setVisibleMessages] = useState(-25)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unsub()
    }
  }, [data.chatId])

  const messagesEl = messages.slice(visibleMessages).map((m) => {
    return <Message message={m} key={m.id} photoURL />
  })

  return (
    <div className="messages">
      {messagesEl}
      <div className="bottomRef" />
    </div>
  )
}
