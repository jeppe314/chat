import React, { useContext, useRef, useState } from "react"
import { FiSend } from "react-icons/fi"
import { ChatContext } from "../context/ChatContext"
import { AuthContext } from "../context/AuthContext"
import { arrayUnion, doc, updateDoc, serverTimestamp, Timestamp } from "firebase/firestore"
import { db } from "../firebase"
import { nanoid } from "nanoid"

export const MessageInput = () => {
  const { data } = useContext(ChatContext)
  const { currentUser } = useContext(AuthContext)

  const [text, setText] = useState()
  const messagesRef = doc(db, "chats", data.chatId)

  const handleKey = (e) => {
    e.code === "Enter" && sendMessage()
  }

  const sendMessage = async () => {
    await updateDoc(messagesRef, {
      messages: arrayUnion({
        text,
        id: nanoid(),
        sender: currentUser.uid,
        date: Timestamp(),
      }),
    })

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    })

    setText("")
  }

  return (
    <div className="messageInput">
      <textarea
        spellCheck="false"
        placeholder="Say hi!"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => handleKey(e)}
      />
      <button className="sendBtn" onClick={sendMessage}>
        <FiSend />
      </button>
    </div>
  )
}
