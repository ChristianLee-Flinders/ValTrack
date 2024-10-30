import HeaderBox from '@/components/header-box'
import PageTitle from '@/components/header-box'
import { loggedIn } from '@/constants'
import React from 'react'

const Home = ({}) => {
  return (
    <div>
      <HeaderBox type='greeting' title='Welcome' user={loggedIn} subtext='The most reliable way to track your agents valuations'/>
    </div>
  )
}

export default Home