import React from 'react'
import styled from '@emotion/styled'
import { FcCalendar } from 'react-icons/fc'
import '../css/postdetails.css'
const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const ReadingTime = styled.p`
  display: inline-block;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <div className="post-details">
        <FcCalendar fontSize={'1.5rem'} />{' '}
        <p className="post-date">{props.date}</p>
        <span>•</span>
        <ReadingTime>{`⏱️ ${props.timeToRead} min read `}</ReadingTime>
      </div>
    </Wrapper>
  )
}

export default PostDetails
