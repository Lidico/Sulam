
import React from 'react';

const Search = () => {
    return(
        <div className="searchBox">
            <label>
                            <textarea   
                             className="materialize-textarea"    
                                dir="rtl"
                                type="text"
                                name="search"
                                placeholder="חפש..."
                            />
                    </label>
                    <i className="material-icons prefix">search</i>
      </div>
    )
}

export default Search;

