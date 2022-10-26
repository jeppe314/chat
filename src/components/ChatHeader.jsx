import React from "react"
import { ImFire } from "react-icons/im"
import { GiHamburgerMenu } from "react-icons/gi"

export const ChatHeader = ({ data }) => {
  return (
    <div className="chatHeader">
      <GiHamburgerMenu className="hamburger" />
      <ImFire className="fireLogo" />
      {data.user.displayName ? (
        <h3>
          Chat with <span>{data.user.displayName}</span>
        </h3>
      ) : (
        <h2>FireChat</h2>
      )}
      <ImFire className="fireLogo" />
    </div>
  )
}
