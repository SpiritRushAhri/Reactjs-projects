import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

// Parent class to render jsx
export default class IndecisionApp extends React.Component {
  // Using babel class transform properties
  state = {
    options: [],
    selectedOption: undefined
  }
  // handleDeleteOptions method => set options array empty
  handleDeleteOptions = () => {
    this.setState(() => ({options: [] }));
  };

  // handleDeleteOption takes in one option and removes it from the options list
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        // if option to remove matches option in the array remove it else leave it
        return optionToRemove !== option;
      })
    }));
  };

  // handlePick method => randomly pick an option and alert
  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[randomNumber];
    this.setState(() => ({
      selectedOption: choice
    }));
  };
  // handleAddOption method => takes a new user option and adds it to the array
  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid option to add';
    }
    else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists!';
    }
    // Use array concat to add onto the existing options array
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };
  // handleClearSelectedOption will clear the Modal
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  // Fetch data
  componentDidMount() {
    // Check for valid json data
    try {
      const json = localStorage.getItem('options');
      // want real array back not string...parese it!
      const options = JSON.parse(json);
      if(options) {
        this.setState(() => ({ options }));
      }
    }
    catch (e) {
      // Do nothing with invalid json fallback to the empty array which is default value
    }
  }

  // Save data
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      // ls only deals with strings...stringify!
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const subtitle = 'Let the app decide!';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
         <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
         />
      </div>
    );
  }
}
// Set default state values of indecision app
IndecisionApp.defaultProps = {
  options: []
};
