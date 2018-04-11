import React, { Component } from 'react'
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import style from './style.scss'

class BookPage extends Component {
  componentDidMount () {
    this.props.action(this.props.dispatch, this.props.match.params.title)
  }

  render () {
    const { book } = this.props
    return (
      <div className={style.container} >
        <Card >
          <CardHeader
            title={book.author && book.author.replace(/_/g, ' ')}
            avatar={book.imageUrl}
          />
          <CardTitle
            title={book.title}
            subtitle={book.genre}
          />
          <CardText >
            {book.description}
          </CardText>
        </Card>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  book: state.book.current
})
export default withRouter(connect(mapStateToProps)(BookPage))
