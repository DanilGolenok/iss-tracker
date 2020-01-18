import React from 'react'
import Location from './components/Location'
import CosmonautList from './components/CosmonautList'
import RealTimeMap from './components/RealTimeMap'
import Time from './components/Time'

import './sass/site.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <Location />
      <Time />
      <RealTimeMap />
      <CosmonautList />
    </div>
  )
}

export default App
