import React from 'react'
import '../css/allTags.css'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
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
            <a
              key={edge.node.title}
              href={`/tag/${edge.node.title.toLowerCase()}`}
            >
              {edge.node.title}
            </a>
          )
        })}
      </div>
    )}
  />
)
