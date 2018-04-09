import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import NavigationBefore from 'material-ui/svg-icons/navigation/arrow-back'
import style from './style.scss'

const alphabet = []
let i
for (i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
  const letter = String.fromCharCode(i)
  alphabet.push(letter)
}

class SubHeader extends Component {
  render () {
    const { currentPos } = this.props
    // if i am in one of the tabs render the alphabet search
    if (currentPos) {
      return (
        <div className={style.alphabet}>
          {alphabet.map(letter => (
            <NavLink
              style={{ color: 'black' }}
              key={letter}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}
              to={`/${currentPos}/${letter}`}
            >{letter}
            </NavLink>))}
        </div>
      )
    }
    return (
      <div className={style.alphabet}>
        <NavigationBefore color="white" onClick={() => this.props.history.goBack()} />
      </div>)
  }
}
export default withRouter(SubHeader)
