import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { NavMain } from "@/components/nav-main"
import SlideshowSidebar from "@/components/slideshow-sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SlideshowSidebar/>
      <main>
        {children}
      </main>
    </SidebarProvider>
  )
}