import React from 'react'
import styled from '@emotion/styled'

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
      <Date>
        <i
          className="fa fa-calendar"
          style={{ color: '#D32500', paddingRight: '6px' }}
        ></i>
        {props.date}
      </Date>
      <span>•</span>
      <ReadingTime>{`⏱️ ${props.timeToRead} min read `}</ReadingTime>
    </Wrapper>
  )
}

export default PostDetails
