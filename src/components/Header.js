import React from 'react'
import { Link, navigateTo } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import '../css/header.css'
import siteLogo from '../../static/images/logo_notext.png'
import Helmet from 'react-helmet'

const activeLinkStyle = {
  textDecoration: 'underline',
}

const Header = () => {
  const { menuLinks } = useSiteMetadata()

  return (
    <header className="header">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text"
          rel="stylesheet"
        />
      </Helmet>
      <div className="logo" onClick={() => navigateTo('/')}>
        <img src={siteLogo} className="logoImg" />
        <a href="/" className="logoText">
          {'Developing Mindset'}
        </a>
      </div>

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

export default Header
