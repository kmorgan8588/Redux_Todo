import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { active, children, onClick } = props;

  if (!active) return <span>{children}</span>;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
