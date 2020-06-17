import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { active, children, onClick } = props;
  return (
    <button
      type="button"
      disabled={active}
      style={{ marginLeft: '4px' }}
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
