import React from "react"

export const ChatHeader = ({ data }) => {
  return (
    <div className="chatHeader">
      {data.user.displayName && (
        <h3>
          Chat with <span>{data.user.displayName}</span>
        </h3>
      )}
    </div>
  )
}
