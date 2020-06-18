import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = ({ match: { params } }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <Footer />
  </div>
);

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
