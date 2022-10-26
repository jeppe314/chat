import React, { useContext, useState, useEffect } from "react"
import { Message } from "./Message"
import { ChatContext } from "../context/ChatContext"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
export const Messages = () => {
  const { data } = useContext(ChatContext)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unsub()
    }
  }, [data.chatId])

  const messagesEl = messages.map((m) => {
    return <Message message={m.text} key={m.id} />
  })

  return <div className="messages">{messagesEl}</div>
}
