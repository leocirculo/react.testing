import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
//Youtube API
const API_KEY = "AIzaSyCFhdlA-S62c2R6CLveW5D42hvCjoCQfDA";

//Create new component to show some HTML
class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { videos: [] };
    
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
      
      console.log(this.state);
    });
  }
  
  
  render() {
    return ( 
      <div> 
        <SearchBar />
      </div>
    );
  }
}
//Take this component's html and put them on the page
ReactDOM.render( < App > < /App>, document.querySelector('.container'));