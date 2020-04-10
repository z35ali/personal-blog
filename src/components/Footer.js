import React from 'react'
import styled from '@emotion/styled'
import '../css/footer.css'
import '../css/font-awesome/css/font-awesome.min.css'
import { FaScroll } from 'react-icons/fa'
const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;

  i,
  .footer-icon {
    transition: all 0.2s;
    font-size: 1.5rem !important;
    paddingtop: 2rem;
    color: white;
    &:hover {
      color: ${props => props.theme.colors.highlight};
      transform: scale(1.2);
    }
  }
`

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <List>
        <Item>
          <a
            href="https://zafaraali.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Portfolio"
          >
            <FaScroll className="footer-icon" />
          </a>
        </Item>
        <Item>
          <a
            href="https://github.com/z35ali"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fa fa-github" />
          </a>
        </Item>
        <Item>
          <a
            href="https://www.linkedin.com/in/zafar-ali-a7a512128/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fa fa-linkedin" />
          </a>
        </Item>
        <Item>
          <a
            href="mailto:zafar.a.ali2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <i className="fa fa-envelope" />
          </a>
        </Item>
      </List>
    </div>
    <h1 className="copyright">Zafar Ali &copy; 2020</h1>
  </footer>
)

export default Footer
