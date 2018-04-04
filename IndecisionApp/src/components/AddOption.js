import React from 'react';
// Add option Component
export default class AddOption extends React.Component {
  // Using babel class transform properties
  state = {
    error: undefined
  }
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    // Not using babel class properties
    // this.state = {
    //   error: undefined
    // }
  }
  handleAddOption = (e) => {
    // Define variable to get user input from the form
    const option = e.target.elements.optionInput.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    // Prevent page refresh from default submit behavior
    if (!error) {
      e.target.elements.optionInput.value = "";
    }
    e.preventDefault();
  };

  render() {
    return(
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="optionInput"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
