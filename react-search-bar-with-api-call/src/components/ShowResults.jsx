import React from 'react'
import './showResults.css'
const ShowResults = ({result}) => {
  return (
    <div className='show_result'>
      {result.name}
    </div>
  )
}

export default ShowResults
