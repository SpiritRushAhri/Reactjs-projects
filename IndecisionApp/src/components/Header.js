import React from 'react';
// Stateless Functional Component Header
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);
// Set default header value
Header.defaultProps = {
  title: 'Indecision App'
};

export default Header;
