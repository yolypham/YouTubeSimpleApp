// Create new component.  This will produce some HTML
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyDztLmdfj9qvv5zMN0a7u9DMJf1BZ3PjCE';

class App extends Component {


    constructor(props) {
        super(props);

        const initialKeyword = 'keto food';

        this.state = {
            keyword: initialKeyword,
            videos: [],
            selectedVideo: null
        }

        this.searchVideo(this.state.keyword);
    }

    componentDidMount() {
    }

    searchVideo(keyword) {
        const opts = {
            maxResults: 10,
            key: API_KEY
        };

        YTSearch(keyword, opts, (err, results) => {
            if (err) return console.log(err);
            this.setState({
                videos: results,
                selectedVideo: results[0]
            });
            console.log(this.state);
        });
    }

    render() {
        return (
            <div className="container main">
                <div className="top">
                    <h1>Simple YouTube Search App</h1>
                    <p>Using package: youtube-search v1.1.3</p>
                </div>

                <SearchBar
                    newSearch={keyword => { this.searchVideo(keyword) }} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList
                    onClickedVideo={selectedVideo => { this.setState({ selectedVideo }) }}
                    videos={this.state.videos} />
            </div>
        )
    }


}

ReactDOM.render(<App />, document.querySelector('.container'));