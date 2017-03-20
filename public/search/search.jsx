import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.activeCity) {
      return <div>No active City</div>;
    }

    return (
      <div>
        <div>{this.props.activeCity.city}</div>
        <div>{this.props.activeCity.population}</div>
      </div>
    );
  }
}

function mapStateToProps({ activeCity }) {
  return {
    activeCity
  };
}

export default connect(mapStateToProps, null)(Search);
