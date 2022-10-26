import React from "react"
export const User = ({ photoURL, displayName, handleClick, latestMessage }) => {
  return (
    <div className="user" onClick={handleClick}>
      <div className="userImg">
        <img src={photoURL} alt="" />
      </div>
      <div>
        <span>{displayName}</span>
        <p className="trunc-2">{latestMessage}</p>
      </div>
      <hr />
    </div>
  )
}
