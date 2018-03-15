import React from 'react';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';


class Volume extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         volumeSearched: 1
        }
        this.fetchUpdate = debounce(500, this.fetchUpdate);
    }

    handleSearch = (e) => {
        console.log(e.target)
        this.setState({
            volumeSearched: e.target.value,
        })
    }

    fetchUpdate = (searchVolume) => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchVolume)
            .then(resp=>{
                return resp.json();
            })
            .then(data => {
                console.log(data)
            }
        )
    }

    componentDidMount(){
        this.fetchUpdate(this.state.volumeSearched)           
    }

    componentDidUpdate(){
        this.fetchUpdate(this.state.volumeSearched)           
    }

    render(){ 
        return (
            <div className="parent">
                <header className="main-header">
                    <div className="container">
                        <h1 className="heading">Book Volumes</h1>
                    </div>
                </header>
                <nav className="main-nav">
                    <div className="container">
                        <input onChange={ this.handleSearch } value={this.state.volumeSearched} />
                    </div>
                </nav>
                <div className="main-section-results">
                    <div className="container">

                    </div>
                </div> 
            </div>

        )

    }
    
}


ReactDOM.render(
    <Volume/>,
    document.getElementById('app')
);
