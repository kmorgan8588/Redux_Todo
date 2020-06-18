import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../redux/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETE:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
