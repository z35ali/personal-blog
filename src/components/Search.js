import React, { Component } from 'react'
import { navigateTo } from 'gatsby-link'

import Select from 'react-select'
import { FaSearch } from 'react-icons/fa'
const menuPlaceholder = 'Search and Select a Post...'
let menuDisplay = 'visible'
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
    visibility: menuDisplay,
  }),
}
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      searchLabel: menuPlaceholder,
      autoFill: false,
      optionData: this.props.data.allContentfulPost.edges,
      alert: '',
    }
  }
  checkValidInput() {
    var newArray = this.state.optionData.map(function(item) {
      return item.node.value
    })
    let input = this.state.searchText.trim()
    input = input.replace(/\s+/g, '-').toLowerCase()

    let matchCount = 0
    let matchedOption = []
    newArray.map(function(option) {
      if (option.includes(input)) {
        matchCount++
        matchedOption = matchedOption.concat(option)
      }
    })
    if (matchCount === 1 && matchedOption.length === 1) {
      navigateTo(matchedOption)
    } else if (matchedOption.length > 1) {
      this.setState({ alert: 'Please narrow your search.' })
      setTimeout(
        function() {
          this.setState({ alert: '' })
        }.bind(this),
        5000
      )
    } else {
      this.setState({ alert: 'No results.' })
      setTimeout(
        function() {
          this.setState({ alert: '' })
        }.bind(this),
        5000
      )
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
      this.setState({ searchText: text })
      this.setState({ searchLabel: text })
    }
  }

  onKeyDown = e => {
    if (e.keyCode === 13) {
      menuDisplay = 'hidden'
      this.onFormSubmit(e)
      setTimeout(function() {
        menuDisplay = 'visible'
      }, 100)
    }
  }

  onFormSubmit = (e, obj) => {
    e.preventDefault()
    if (this.state.searchText !== '') {
      this.checkValidInput()
    }
  }
  render() {
    const { data } = this.props
    const { alert } = this.state
    return (
      <>
        <form className="form-inline" onSubmit={e => this.onFormSubmit(e)}>
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
              onKeyDown={this.onKeyDown}
              className="searchbar"
            />
            <button type="submit">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </form>
        <span className="search-alert">{alert}</span>
      </>
    )
  }
}
