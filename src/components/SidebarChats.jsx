import React, { useContext, useState, useEffect } from "react"
import { User } from "./User"
import { AuthContext } from "../context/AuthContext"
import { db } from "../firebase"
import { doc, getDoc, onSnapshot } from "firebase/firestore"

export const SidebarChats = () => {
  const { currentUser } = useContext(AuthContext)

  const [chats, setChats] = useState([])

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

  console.log(chats)

  const chatsElement = Object.entries(chats)?.map((chat) => {
    return (
      <User
        key={chat[0]}
        photoURL={chat[1].userInfo.photoURL}
        displayName={chat[1].userInfo.displayName}
      />
    )
  })

  return <div className="chats">{chatsElement}</div>
}
