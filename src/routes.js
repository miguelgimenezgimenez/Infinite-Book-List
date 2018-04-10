import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ListPage from './components/pages/ListPage'
import * as bookActions from './actions/book'
import * as authorActions from './actions/author'
import * as genreActions from './actions/genre'
import FilterPage from './components/pages/AllBooksPage'

export default (
  <Switch>
    <Route
      path="/"
      exact
      component={() => <Redirect to="books" />}
    />
    <Route
      path="/books/:query?"
      component={() =>
        <FilterPage type="book" action={bookActions.listForLetter} />}
    />
    <Route
      path="/authors/:query?"
      component={() =>
        <FilterPage type="author" action={authorActions.listForLetter} />}
    />
    <Route
      path="/genres/:query?"
      component={() =>
        <ListPage type="genre" action={genreActions.listForLetter} />}
    />
    <Route
      path="/author/:query"
      component={() =>
        <ListPage type="book" action={bookActions.listForAuthor} />}
    />
    <Route
      path="/genre/:query"
      component={() =>
        <ListPage type="book" action={bookActions.listForGenre} />}
    />

  </Switch>
)
