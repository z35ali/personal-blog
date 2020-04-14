import React from 'react'
import styled from '@emotion/styled'
import { GiCalendar } from 'react-icons/gi'
import '../css/postDetails.css'
const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  display: inline-block;
`

const ReadingTime = styled.p`
  display: inline-block;
`

const PostDetails = props => {
  return (
    <Wrapper>
      <GiCalendar className="calendarIcon" />
      <div className="postDetailsContainer">
        <Date>{props.date}</Date>
        <span>•</span>
        <ReadingTime>{`⏱️ ${props.timeToRead} min read `}</ReadingTime>
      </div>
    </Wrapper>
  )
}

export default PostDetails
