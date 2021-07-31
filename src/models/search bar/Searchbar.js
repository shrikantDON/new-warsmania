
import React from "react";


import "./searchbar.css";

class SearchBar extends React.Component{





    render(){


        return(


<div className="search">

<input type="checkbox" id="trigger" className="search__checkbox" />
<label className="search__label-init" for="trigger"></label>
<label className="search__label-active" for="trigger"></label>
<div className="search__border"></div>
<input type="text" className="search__input"  placeholder="Search a War" />
<div className="search__close"></div>
</div>

        );
    }
}


export default SearchBar;