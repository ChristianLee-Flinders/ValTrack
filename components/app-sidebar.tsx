"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Terminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { adminLinks, footerLinks, locations, sidebarLinks } from "@/constants"
import { Input } from "./ui/input"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const navMain = sidebarLinks
const footerNav = footerLinks
const Locations = locations
const user = getLoggedInUser();
console.log(user);
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-none" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={Locations} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} title="Managment" />
        <NavMain items={adminLinks} title="Admin" />
      </SidebarContent>
      <NavMain items={footerNav} title=""/>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
