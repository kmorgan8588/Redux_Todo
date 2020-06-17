import React from 'react';
import Proptypes from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
  const { todos, onTodoClick } = props;
  return (
    <ul>
      {todos.map((todo) => {
        const { id, text, completed } = todo;
        return (
          <Todo
            key={id}
            text={text}
            id={id}
            completed={completed}
            onClick={() => onTodoClick(id)}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number.isRequired,
      completed: Proptypes.bool.isRequired,
      text: Proptypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: Proptypes.func.isRequired,
};

export default TodoList;
