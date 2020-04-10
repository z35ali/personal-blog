import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { globalStyles } from '../styles/globalStyles.js'
import AllTags from './AllTags'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`
const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  let hideTags = false
  useEffect(
    () => window.addEventListener('keydown', handleFirstTab),
    [],
    (hideTags =
      window.location.pathname === '/about/' ||
      window.location.pathname === '/contact/')
  )
  return (
    <Root className="siteRoot">
      <div className="siteContent">
        <Skip href="#main" id="skip-navigation">
          Skip to content
        </Skip>
        <Menu />
        <div id="main">{props.children}</div>
      </div>

      <Global styles={globalStyles} />
      {hideTags ? null : <AllTags />}

      <Footer />
    </Root>
  )
}

export default Layout
