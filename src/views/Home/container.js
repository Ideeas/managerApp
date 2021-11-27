import React from 'react'
import { useSelector } from 'react-redux'

import HomeView from './Home'

function HomeContainer() {
  const user = useSelector((state) => state.user)

  return <HomeView user={user} />
}

export default HomeContainer
