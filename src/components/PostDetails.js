import React from 'react'
import styled from '@emotion/styled'
import { FcCalendar, FcClock } from 'react-icons/fc'
import '../css/postdetails.css'
const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const PostDetails = props => {
  return (
    <Wrapper>
      <div className="post-details">
        <FcCalendar fontSize={'1.5rem'} />
        <p className="post-date">{props.date}</p>
        <span>•</span>
        <FcClock fontSize={'1.5rem'} />
        <p className="post-time-to-read">{`${props.timeToRead} min read `}</p>
      </div>
    </Wrapper>
  )
}

export default PostDetails
