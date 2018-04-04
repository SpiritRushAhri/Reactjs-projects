import React from 'react';
// Stateless Functional Component Option
const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}.{props.optionText}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

// Can remove the variable but then it will show unknown in the dev tools, better this way
export default Option;
