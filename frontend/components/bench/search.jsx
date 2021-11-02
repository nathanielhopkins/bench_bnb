import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';
import FilterForm from './filter_form'

class Search extends React.Component {
  render() {
    const { benches, updateFilter, minSeating, maxSeating } = this.props;
    
    return(
      <div className='user-pane'>
        <div className='left-pane'>
          <BenchMap benches={benches} updateFilter={updateFilter} />
        </div>
        <div className='right-pane'>
          <FilterForm 
            minSeating={minSeating} 
            maxSeating={maxSeating} 
            updateFilter={updateFilter}
          />
          <BenchIndex benches={benches} />
        </div>
      </div>
    )
  }
}

export default Search;