import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import logo from "../images/az.svg"
import SocialMedia from "./socialMedia"
const links = ["Blog", "Projects", "Contact"];
const sections = links.map(item => {
  const link = `/${item.toLowerCase()}/`;
  return (
    <li className="header-li" key={item}>
      <Link to={link}>{item}</Link>
    </li>
  )
});

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/">
      <img className="header-logo" src={logo} alt="logo" />
    </Link>
    <nav className="header-nav">
      <ul>
        {sections}
      </ul>
    </nav>
    <SocialMedia/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
