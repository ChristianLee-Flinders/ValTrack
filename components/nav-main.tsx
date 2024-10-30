"use client"

import { ChevronRight, Folder, Forward, House, MoreHorizontal, Trash2, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge" // Import ShadCN badge
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function NavMain({ items, title}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    secondaryIcon?: LucideIcon
    isActive?: boolean
    badge?: string // Badge variable added
    items?: {
      title: string
      url: string
    }[]
  }[],
  title: string
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          item.items && item.items.length > 0 ? (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {item.badge && <Badge className="ml-2">{item.badge}</Badge>} {/* Badge displayed here */}
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    {item.secondaryIcon && <item.secondaryIcon className="ml-2" />} {/* Secondary icon */}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <a href={item.url} className="flex items-center">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {item.badge && <Badge className="ml-auto">{item.badge}</Badge>} {/* Badge displayed here */}
                  {item.secondaryIcon && <item.secondaryIcon className="ml-auto" />} {/* Secondary icon */}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
