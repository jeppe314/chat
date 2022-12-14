import React, { useContext, useState, useEffect } from "react"
import { User } from "./User"
import { AuthContext } from "../context/AuthContext"
import { MenuContext } from "../context/MenuContext"
import { db } from "../firebase"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { ChatContext } from "../context/ChatContext"
import { setUserId } from "firebase/analytics"

export const SidebarChats = () => {
  const [chats, setChats] = useState([])
  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)
  const { isOpen, setOpen } = useContext(MenuContext)

  useEffect(() => {
    //gets the current users chats from db
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      })

      // cleanup
      return () => {
        unsub()
      }
    }

    //call function above only if there is a current user (otherwise it crashes)
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u })
    setOpen(!isOpen)
  }

  const chatsElement = Object.entries(chats)
    ?.sort((a, b) => b[1].date - a[1].date)
    .map((chat) => {
      return (
        <User
          key={chat[0]}
          photoURL={chat[1].userInfo.photoURL}
          displayName={chat[1].userInfo.displayName}
          handleClick={() => handleSelect(chat[1].userInfo)}
          latestMessage={chat[1].lastMessage?.text}
        />
      )
    })

  return <div className="chats">{chatsElement}</div>
}
