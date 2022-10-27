import React, { useContext } from "react"
import { SidebarChats } from "./SidebarChats"
import { SidebarNav } from "./SidebarNav"
import { Search } from "./Search"
import { MenuContext } from "../context/MenuContext"

export const Sidebar = () => {
  const { isOpen } = useContext(MenuContext)

  return (
    <div className={`sidebar ${isOpen ? "showMenu" : ""}`}>
      <Search />
      <SidebarChats />
      <SidebarNav />
    </div>
  )
}
