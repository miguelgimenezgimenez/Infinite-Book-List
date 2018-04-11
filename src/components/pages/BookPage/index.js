import React, { Component } from 'react'
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import * as bookActions from '../../../actions/book'

export default class componentName extends Component {
  componentDidMount () {
    bookActions.getBook(this.props.match.params.title)
  }

  render () {
    return (
      <div >
        <Card >
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            // avatar="images/jsa-128.jpg"
          />
          <CardTitle
            title="Card title"
            subtitle="Card subtitle"
          />
          <CardText >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
          Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    )
  }
}
