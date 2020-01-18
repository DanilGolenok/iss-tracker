import React, { useState, useEffect } from 'react'
import CosmonautElement from './CosmonautElement'
import ISSPeopleService from '../business/api/ISSPeopleService'
import Cosmonaut from '../business/models/Cosmonaut'
import uuid from 'uuid'

const CosmonautList: React.FC = () => {
  const issPeopleService = new ISSPeopleService()
  const [cosmonautList, setCosmonautList] = useState<Cosmonaut[]>([])

  useEffect(() => updatePeopleOnISS(), [])

  const updatePeopleOnISS = () => {
    const peopleOnIss = issPeopleService.getPeopleOnISS()
    setCosmonautList(peopleOnIss)
  }

  return (
    <div className="cosmonaut-list">
      <div className="list scrollbar">
        {cosmonautList.map(cosmonaut => (
          <CosmonautElement key={uuid.v4()} cosmonaut={cosmonaut} />
        ))}
      </div>
      <span className="total">
        Total amount: {cosmonautList.length} people on ISS
      </span>
    </div>
  )
}

export default CosmonautList
