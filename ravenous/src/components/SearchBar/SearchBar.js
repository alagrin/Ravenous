import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
		this.handleSortByChange = this.handleSortByChange.bind(this);

		this.sortByOptions = {
	     'Best Match': 'best_match',
	     'Highest Rated': 'rating',
	     'Most Reviewed': 'review_count'
        };
	}

	getSortByClass(sortByOption) {
		if(this.state.sortBy === sortByOption) {
			return 'active';
		  } 
			return '';
		}

    handleSortByChange(sortByOption){
    	this.setState({
    		sortBy: sortByOption
    	});
    }

    handleTermChange(event) {
    	this.setState({
    		term: event.target.value
    	});
    }

    handleLocationChange(event) {
    	this.setState({
    		term: event.target.location
    	});
    }

    handleSearch(event) {
    	this.searchYelp(this.state.term,this.state.location,this.state.sortBy);
    	event.preventDefault();
    }
    
    searchYelp(term,location,sortBy) {
    	console.log(`Yelp is searching ${this.term}, ${this.location}, and ${this.sortBy}`)
    }
	
	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map(sortByOption => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return <li 
			key={sortByOptionValue} 
			className={this.getSortByClass(sortByOptionValue)}
			onClick={this.handleSortByChange.bind(this,sortByOption)}>{sortByOption}</li>;
		});
	}

	render() {
	  return (
		<div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()} 
            </ul>
          </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit" searchYelp={this.searchYelp}>
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
       </div>
       );
	}
}

export default SearchBar;