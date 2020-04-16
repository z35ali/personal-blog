import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'

import { StaticQuery, graphql } from 'gatsby'
import '../css/searchbar.css'
import Select from 'react-select'
const styles = {
  container: base => ({
    ...base,
    flex: 1,
    width: '170px',
  }),
  singleValue: base => ({
    ...base,
    padding: '20px 0px',
  }),
}
export default class SearchPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  parseOption = object => {
    var newArray = object.map(function(item) {
      return { label: item.node.label, value: item.node.value }
    })

    return newArray
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
      this.setState({ searchText: selectedOption.value })
    )
  }

  onFormSubmit = e => {
    e.preventDefault()
    navigateTo(this.state.searchText)
  }
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
          <div className="searchBarContainer">
            <form className="form-inline" onSubmit={e => this.onFormSubmit(e)}>
              <div className="form-group ">
                <Select
                  options={this.parseOption(data.allContentfulPost.edges)}
                  placeholder="Search Posts"
                  onChange={this.handleChange}
                  noOptionsMessage={() => 'No Posts'}
                  styles={styles}
                  onKeyDown={e => this.onFormSubmit(e)}
                />
              </div>
            </form>
          </div>
        )}
      />
    )
  }
}
