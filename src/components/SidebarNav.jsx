import React, { useContext } from "react"
import { ImFire } from "react-icons/im"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { AuthContext } from "../context/AuthContext"
import { ImPowerCord } from "react-icons/im"

export const SidebarNav = () => {
  const { currentUser } = useContext(AuthContext)

  const { displayName, photoURL } = currentUser

  return (
    <div className="sidebarNav">
        <div className="profile">
          <img src={photoURL} alt="" />
          <span>{displayName}</span>
        </div>
        <ImPowerCord className="logoutBtn" title="Logout" onClick={() => signOut(auth)} />
    </div>
  )
}
