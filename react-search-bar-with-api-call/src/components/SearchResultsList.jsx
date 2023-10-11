import React from 'react';
import './searchResultsList.css';
import ShowResults from './ShowResults';

const SearchResultsList = ({results}) => {
    return (
        <div className='results_list'>
           {
            results.map((result,id)=>{
                return <ShowResults result={result} key={id} />
            })
           }
        </div>
    )
}

export default SearchResultsList
