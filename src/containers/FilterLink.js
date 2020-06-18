import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilterLink = (props) => {
  const { filter, children } = props;
  return (
    <NavLink
      exact
      to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
      activeStyle={{ textDecoration: 'none', color: 'black' }}
    >
      {children}
    </NavLink>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default FilterLink;
