import React, { Component } from 'react';
import MultiSelect from './Components/UI/MultiSelectAllowCreateNew';
class App extends Component {

  state = {
    options: [
      { label: 'Thing 1', value: 1 },
      { label: 'Thing 2', value: 2 },
      { label: 'Thing 3', value: 3 },
      { label: 'Thing 4', value: 4 },
      { label: 'Thing 5', value: 5 },
      { label: 'Thing 6', value: 6 },
      { label: 'Thing 7', value: 7 },
      { label: 'Thing 8', value: 8 },
      { label: 'Thing 9', value: 9 },
      { label: 'Thing 10', value: 10 },
    ],
    selected: []
  };

  handleChange = (selectedOption) => {

    this.setState(
      {
        selected: selectedOption
      }
    );
  }

  render() {

    return (
      <div className="App">
        <MultiSelect
          onChange={this.handleChange}
          options={this.state.options}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
