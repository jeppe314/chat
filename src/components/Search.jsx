import React, { useState, useEffect, useContext } from "react"
import { db } from "../firebase"
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore"
import { AuthContext } from "../context/AuthContext"

export const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthContext)

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSearch = async () => {
    const usersRef = collection(db, "users")
    const q = query(usersRef, where("displayName", "==", username))
    const querySnapshot = await getDocs(q)

    try {
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (err) {
      setErr(true)
    }
  }

  const handleSelect = async () => {
    //create one id for userchat, doesnt matter which user is logged in
    const combinedId =
      currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
    //check whether chat between these users exists in db
    try {
      const res = await getDoc(doc(db, "chats", combinedId))

      //if not, create chat in db between users
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] })

        //create user chats

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        })

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        })
      }
    } catch (err) {
      console.log("Cant find chat between users")
    }

    //create userchats
  }

  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Search user..."
      ></input>
      {err && <span>Something went wrong</span>}
      {user && (
        <div className="userFound" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
            <p>Last message</p>
          </div>
        </div>
      )}
    </div>
  )
}
