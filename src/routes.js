import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BookPage from './components/pages/BookPage'
import ListPage from './components/pages/ListPage'
import * as bookActions from './actions/book'
import * as authorActions from './actions/author'
import * as genreActions from './actions/genre'

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
        <ListPage type="book" action={bookActions.listForLetter} />}
    />
    <Route
      path="/authors/:query?"
      component={() =>
        <ListPage type="author" action={authorActions.listForLetter} />}
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
    <Route
      path="/book/:title"
      component={() => <BookPage action={bookActions.getBook} />}
    />

  </Switch>
)
