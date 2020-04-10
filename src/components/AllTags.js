import React, { Component } from 'react'
import '../css/allTags.css'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const Tag = styled.a`
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`
export default class AllTags extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query MyQuery {
            allContentfulTag {
              edges {
                node {
                  title
                  id
                }
              }
            }
          }
        `}
        render={data => (
          <div className="tagsContainer">
            {data.allContentfulTag.edges.map(function(edge) {
              return (
                <Tag
                  key={edge.node.title}
                  href={`/tag/${edge.node.title.toLowerCase()}`}
                >
                  {edge.node.title}
                </Tag>
              )
            })}
          </div>
        )}
      />
    )
  }
}
