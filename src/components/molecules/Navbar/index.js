import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { withRouter } from 'react-router-dom'
import Subheader from '../../atoms/SubHeader'

const link = ['books', 'authors', 'genres']

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: link.indexOf(this.props.location.pathname.split('/')[1])
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const slideIndex = link.indexOf(this.props.location.pathname.split('/')[1])
    if (prevState.slideIndex !== slideIndex) {
      // eslint-disable-next-line
      this.setState({ slideIndex })
    }
  }

  handleChange (value) {
    this.props.history.push(`/${link[value]}`)
    this.setState({
      slideIndex: value
    })
  }

  render () {
    const { slideIndex } = this.state
    const currentPos = link[slideIndex]
    return (
      <div>
        <Tabs
          onChange={e => this.handleChange(e)}
          value={this.state.slideIndex}
        >
          <Tab label="All Books" value={0} />
          <Tab label="Authors" value={1} />
          <Tab label="Genres" value={2} />

        </Tabs>
        <Subheader currentPos={currentPos} />
      </div>
    )
  }
}

export default withRouter(Layout)
