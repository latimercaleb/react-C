import React from 'react';
import api, {DEFAULT_PARAMS} from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
// Root component
class App extends React.Component{
    
    state={videos:[]};

    ytFetchHandler = async (searchTerm) => {
        const response= await api.get("/search", {
            params: {
                q: searchTerm,
                ...DEFAULT_PARAMS
            }
        });

        console.log(response.data.items);
        this.setState({videos: response.data.items});
    }

    render(){
        return(
            <div className="ui-container">
                <SearchBar ytFetch={this.ytFetchHandler}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;