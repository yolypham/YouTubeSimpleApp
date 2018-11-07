import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = (event) => {
        console.log(event);
        this.setState({ term: event.target.value });
    }

    render() {
        const { newSearch } = this.props;

        return (
            <div className="search-bar">
                <input type="text" required ref="newKeyword" />
                <button onClick={event => newSearch(this.refs.newKeyword.value)}>Search</button>

            </div>
        );
    }

}

export default SearchBar;