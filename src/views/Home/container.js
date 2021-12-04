import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../general/components/Loading'

import HomeView from './Home'

function HomeContainer() {
  const user = useSelector((state) => state.user)
  const loading = useSelector((state) => state.loading)

  if (user === null) return <Loading loading={loading} />
  return <HomeView user={user} />
}

export default HomeContainer
