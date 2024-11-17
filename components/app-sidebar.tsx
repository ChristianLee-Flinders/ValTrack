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

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar>) {

  const fallbackUser: User = {
    name: "Guest",
    email: "guest@example.com",
    $id: "",
    userId: "",
    firstName: "",
    lastName: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: ""
  };

  return (
    <Sidebar user={user} className="border-none" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={Locations} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} title="Management" />
        <NavMain items={adminLinks} title="Admin" />
      </SidebarContent>
      <NavMain items={footerNav} title="" />
      <SidebarFooter>
        <NavUser user={user ?? fallbackUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

