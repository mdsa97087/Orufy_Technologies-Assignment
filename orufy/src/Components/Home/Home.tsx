import React from 'react'
import SidePart from './SidePart/SidePart'
import "./Home.css";
import DataPart from './DataPart/DataPart';

function Home() {
  return (
    <div className='HomeDiv'>
      <SidePart />
      <DataPart />
    </div>
  )
}

export default Home