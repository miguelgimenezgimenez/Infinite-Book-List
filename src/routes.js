import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ListPage from './components/pages/ListPage'
import * as bookActions from './actions/book'
import * as authorActions from './actions/author'
// import * as genreActions from './actions/genre'

export default (
  <Switch>
    <Route
      path="/"
      exact
      component={() => <Redirect to="books" />}
    />
    <Route
      path="/books/:letter?"
      component={() =>
        <ListPage type="book" action={bookActions} />}
    />
    <Route
      path="/authors/:letter?"
      component={() =>
        <ListPage type="author" action={authorActions} />}
    />
    <Route
      path="/genres/:letter?"
      component={() =>
        <ListPage type="genre" action={authorActions} />}
    />
    <Route
      path="/author/:id?"
      component={() =>
        <ListPage type="author" action={authorActions} />}
    />
    <Route
      path="/genre/:letter?"
      component={() =>
        <ListPage type="author" action={authorActions} />}
    />

  </Switch>
)
