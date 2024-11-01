import HeaderBox from '@/components/header-box'
import SettingsTeam from '@/components/settings/settings-team'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { Suspense } from 'react'
import SettingsUser from '@/components/settings/settings-user';

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
  // Fetch or return your actual data here
}

const Settings = async () => {
  const data = await fetchData();
  return (
    <div>
        <HeaderBox type={'title'} title={'Settings'} subtext={''} />
        <Tabs defaultValue="account">
          <TabsList className='w-full'>
            <TabsTrigger value="account">My Details</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="Plan">Plan</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
          </TabsList>
          <TabsContent value="account"><SettingsUser /></TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value='team'><SettingsTeam /></TabsContent>
        </Tabs>
    </div>
  )
}

export default Settings