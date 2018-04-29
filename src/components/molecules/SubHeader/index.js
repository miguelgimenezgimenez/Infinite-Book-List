import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import NavigationBefore from 'material-ui/svg-icons/navigation/arrow-back'
import style from './style.scss'
import { createList } from '../../../../utils/createList'

const alphabet = createList()

class SubHeader extends Component {
  render () {
    const { currentPos } = this.props
    // if i am in one of the tabs render the alphabet search
    if (currentPos) {
      return (
        <div className={style.alphabet}>
          {alphabet.map(letter => (
            <NavLink
              style={{ color: 'white' }}
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
      <div onClick={() => this.props.history.goBack()} className={style.alphabet}>
        <NavigationBefore className={style.back} color="white" />
      </div>)
  }
}
export default withRouter(SubHeader)
