import React,{useState} from 'react'
import './App.css'

import SearchBar from './components/SearchBar'
import SearchResultsList from './components/SearchResultsList';

const App = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search_bar_container">
        <SearchBar setresults={setResults}/>
        {console.log(results)}
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}

export default App;
