import React, { Component } from 'react';
import request from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import HomeCityList from './homeCityList';
import updateActiveCity from '../actions/activeCity';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onChange = this.onChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ term: e.target.value });
  }

  searchSubmit() {
    request.get(`/api/search/${this.state.term}`)
    .then(({ data }) => {
      this.props.updateActiveCity(data);
    })
    .catch((err) => {
      console.log(`Error submitting search: ${err}`);
    });
  }

  render() {
    return (
      <div className="home">
        <div className="home-main">
          <div className="home-main-search">
            <input type="text" onChange={this.onChange} />
            <NavLink onClick={this.searchSubmit} to="/search">Search</NavLink>
          </div>
        </div>
        <div className="home-list">
          <HomeCityList />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateActiveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
