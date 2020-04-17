import React, { Component } from 'react'

import { StaticQuery, graphql } from 'gatsby'
import '../css/searchbar.css'

import Search from './Search'

export default class SearchPosts extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query postQuery {
            allContentfulPost {
              edges {
                node {
                  label: title
                  value: slug
                }
              }
            }
          }
        `}
        render={data => (
          <div className="searchPosts">
            <div className="searchBarContainer">
              <Search data={data} />
            </div>
          </div>
        )}
      />
    )
  }
}
