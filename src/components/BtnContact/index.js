import React from "react"
import "./style.scss"

import { Link } from "gatsby"

export default ({ children }) => (
  <Link to="/">
    <button className="nav-button">{children}</button>
  </Link>
)