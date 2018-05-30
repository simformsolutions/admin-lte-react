import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function SidebarWrapper({ children }) {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        {children}
      </section>
    </aside>
  );
}

SidebarWrapper.propTypes = propTypes;

export default SidebarWrapper;
