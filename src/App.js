import React, { Component } from 'react';
import SearchBar from './components/search_bar.jsx';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyC9CHAxCZsf3HFEH2EOJgQQG54y40dYLjA';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
    YTSearch ({ key:API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos
      }) 
    })
    
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
