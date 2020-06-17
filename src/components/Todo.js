import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
  const { onClick, completed, text } = props;

  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      role="presentation"
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
