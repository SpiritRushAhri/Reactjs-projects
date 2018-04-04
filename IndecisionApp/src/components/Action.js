import React from 'react';
// Stateless Functional Component Action
const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      // Disable the button if hasOptions = false which means array is empty
      disabled={!props.hasOptions}
    >
      What should I do?!
    </button>
  </div>
);

export default Action;
