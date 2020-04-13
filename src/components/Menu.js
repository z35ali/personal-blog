import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import '../css/header.css'

const activeLinkStyle = {
  textDecoration: 'underline',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <header className="header">
      <a href="/" className="logo">
        Developing Mindset {'</>'}
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        {menuLinks.slice(1).map(link => (
          <li key={link.name}>
            <Link to={link.slug} activeStyle={activeLinkStyle}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Menu
