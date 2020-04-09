import React from 'react'
import styled from '@emotion/styled'
import '../css/footer.css'
import '../css/font-awesome/css/font-awesome.min.css'
const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const Footer = () => (
  <div className="footer-wrapper">
    <List>
      <Item>
        <a
          href="https://zafaraali.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my portfolio site!
        </a>
      </Item>
      <Item>
        <a
          href="https://github.com/z35ali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" />
        </a>
      </Item>
      <Item>
        <a
          href="https://www.linkedin.com/in/zafar-ali-a7a512128/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" />
        </a>
      </Item>
      <Item>
        <a
          href="mailto:zafar.a.ali2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope" />
        </a>
      </Item>
    </List>
  </div>
)

export default Footer
