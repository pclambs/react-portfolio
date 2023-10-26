import React from "react"
import Navigation from "../Navigation"
import "./Header.css"

function Header() {
  return (
    <header>
      <div className="header-div">
        <h1>pclambs</h1>
        <Navigation />
      </div>
    </header>
  )
}

export default Header