import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import '../css/searchbar.css'
import Select from 'react-select'
import { FaSearch } from 'react-icons/fa'
const menuPlaceholder = 'Search and Select a Post...'
const styles = {
  container: base => ({
    ...base,
    flex: 1,
  }),
  singleValue: base => ({
    ...base,
    padding: '20px 0px',
  }),
  dropdownIndicator: base => ({
    ...base,
    visibility: 'hidden',
  }),
  menu: base => ({
    ...base,
    zIndex: '900',
    width: 'parent',
  }),
}
export default class SearchPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      searchLabel: menuPlaceholder,
      autoFill: false,
    }
  }

  parseOption = object => {
    var newArray = object.map(function(item) {
      return { label: item.node.label, value: item.node.value }
    })

    return newArray
  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => this.setState({ searchText: selectedOption.value }),
      this.setState({ searchLabel: selectedOption.label })
    )
    this.setState({ autoFill: true })
  }

  handleInput = text => {
    if (text !== '') {
      this.setState({ autoFill: false })
      this.setState({ searchText: '' })
      this.setState({ searchLabel: menuPlaceholder })
    }
  }

  onFormSubmit = (e, obj) => {
    e.preventDefault()
    if (this.state.searchText !== '') navigateTo(this.state.searchText)
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
          <div className="searchPosts">
            <div className="searchBarContainer">
              <form
                className="form-inline"
                onSubmit={e => this.onFormSubmit(e)}
              >
                <div className="form-group ">
                  <Select
                    options={this.parseOption(data.allContentfulPost.edges)}
                    onChange={this.handleChange}
                    onInputChange={this.handleInput}
                    noOptionsMessage={() => 'No Posts'}
                    styles={styles}
                    value={{
                      label: this.state.searchLabel,
                      value: this.state.searchText,
                    }}
                    className="searchbar"
                  />
                  <button type="submit">
                    <FaSearch className="search-icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      />
    )
  }
}
