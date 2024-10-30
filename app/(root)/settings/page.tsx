import HeaderBox from '@/components/header-box'
import SettingsTeam from '@/components/settings/settings-team'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const Settings = () => {
  return (
    <div>
        <HeaderBox type={'title'} title={'Settings'} subtext={''} />
        <Tabs defaultValue="team">
          <TabsList className='w-full'>
            <TabsTrigger value="account">My Details</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="Plan">Plan</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value='team'><SettingsTeam /></TabsContent>
        </Tabs>

    </div>
  )
}

export default Settings