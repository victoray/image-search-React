import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };


    render() {
        return (
            <div className={"ui segment"}>
                <form onSubmit={this.onFormSubmit} className={"ui form"}>
                    <div className={"field"}>
                        <label> Image Search</label>
                        <div className="ui fluid action input">

                            <input type="text" value={this.state.term} name={"search"} placeholder="Search..."
                                   onChange={(e) => this.setState({term: e.target.value})}/>
                            <div onClick={this.onFormSubmit} className="ui submit button">Search</div>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}


export default SearchBar;