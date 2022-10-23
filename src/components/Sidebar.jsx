import React from "react"
import { SidebarChats } from "./SidebarChats"
import { SidebarNav } from "./SidebarNav"

export const Sidebar = () => {
  return (
      <div className="sidebar">
        <SidebarNav />
        <SidebarChats />
      </div>
  )
}
