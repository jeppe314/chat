import React from "react"
import { SearchBar } from "./SearchBar"
import { User } from "./User"

export const SidebarChats = () => {
  return (
    <div className="sidebarChats">
      <SearchBar />
      <div className="chats">
        <User />
        <User />
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
