import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minSeating: this.props.minSeating,
      maxSeating: this.props.maxSeating
    }
  }

  update(property) {
    return e => {
      this.setState({ [property]: e.target.value });
      this.props.updateFilter(property, parseFloat(e.target.value));
    }
  }

  render() {
    return(
      <div>
        <span className="filter">Filter results:</span>
        <br />
        <label>Mininum Seats:
          <input
            type="number"
            value={this.state.minSeating}
            onChange={this.update('minSeating')}
          />
        </label>
        <br />
        <label>Maximum Seats:
          <input
            type="number"
            value={this.state.maxSeating}
            onChange={this.update('maxSeating')}
          />
        </label>
      </div>
    )
  }
}

export default FilterForm;