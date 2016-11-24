import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//Youtube API
const API_KEY = "AIzaSyCFhdlA-S62c2R6CLveW5D42hvCjoCQfDA";

//Create new component to show some HTML
class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
      
    };
    
    this.videoSearch('game of thrones');
  }
  
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
    
  render() {
    
    return (
      <div> 
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}
//Take this component's html and put them on the page
ReactDOM.render( < App > < /App>, document.querySelector('.container'));