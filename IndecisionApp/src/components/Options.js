import React from 'react';
import Option from './Option';

// Stateless Functional Component Options
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h2 className="widget-header__title">Your Options</h2>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All Options
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add options to get started!</p>}
      {
        /* Loop through array of options and for each element render a new instance of option */
        props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
  </div>
);

export default Options;
