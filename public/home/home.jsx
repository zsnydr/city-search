import React, { Component } from 'react';
import request from 'axios';
import HomeCityList from './homeCityList';

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

  searchSubmit(e) {
    e.preventDefault();
    request.get(`/api/search/${this.state.term}`)
    .then(() => {
      // TODO: update Redux
      // TODO: redirect to search page
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
            <input
              type="submit"
              value="Search"
              onClick={this.searchSubmit}
              className="home-main-search-submit"
            />
          </div>
        </div>
        <div className="home-list">
          <HomeCityList />
        </div>
      </div>
    );
  }
}

export default Home;
