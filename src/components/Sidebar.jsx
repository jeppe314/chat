import React from "react"
import { SidebarChats } from "./SidebarChats"
import { SidebarNav } from "./SidebarNav"
import { Search } from "./Search"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search />
      <SidebarChats />
      <SidebarNav />
    </div>
  )
}
