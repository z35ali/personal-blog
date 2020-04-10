import React, { Component } from 'react'
import '../css/allTags.css'
import { StaticQuery, graphql } from 'gatsby'

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
          <>
            <h1 className="allTagsHeader">All Tags</h1>
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
          </>
        )}
      />
    )
  }
}
