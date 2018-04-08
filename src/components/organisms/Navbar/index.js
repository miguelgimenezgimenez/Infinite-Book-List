import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { withRouter, NavLink } from 'react-router-dom'
import style from './style.scss'

const alphabet = []
let i
for (i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
  const letter = String.fromCharCode(i)
  alphabet.push(letter)
}
const link = ['/books', '/authors', '/genres']

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: Math.max(link.indexOf(this.props.location.pathname), 0)
    }
  }

  handleChange (value) {
    this.props.history.push(`${link[value]}`)
    this.setState({
      slideIndex: value
    })
  }

  render () {
    const index = this.state.slideIndex

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

        <div className={style.alphabet} >
          {alphabet.map(letter => (
            <NavLink
              key={letter}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}
              to={`${link[index]}/${letter}`}
            >{letter}
            </NavLink>))}

        </div>
      </div>
    )
  }
}

export default withRouter(Layout)
