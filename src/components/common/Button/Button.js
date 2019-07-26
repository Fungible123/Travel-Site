import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Book } from "./style"

const Button = () => {
  return (
    <Book>
      <AnchorLink href="#contact">Book Now</AnchorLink>
    </Book>
  )
}

export default Button
