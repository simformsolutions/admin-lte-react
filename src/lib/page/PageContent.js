import React from 'react'; import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function PageContent({ children }) {
  return (
    <section className="content">
      {children}
    </section>
  );
}

PageContent.propTypes = propTypes;

export default PageContent;
