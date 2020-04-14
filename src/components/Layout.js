import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Header from './Header'
import Footer from '../components/Footer'
import { globalStyles } from '../styles/globalStyles.js'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }

  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])
  return (
    <Root className="siteRoot">
      <div className="siteContent">
        <Header />
        <br />
        <div id="main">{props.children}</div>
      </div>

      <Global styles={globalStyles} />

      <Footer />
    </Root>
  )
}

export default Layout
