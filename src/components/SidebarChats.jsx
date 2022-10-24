import React from "react"
import { User } from "./User"

export const SidebarChats = () => {
  return (
    <div className="sidebarChats">
      <input type="text" placeholder="Search user..."></input>
      <div className="chats">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  )
}
