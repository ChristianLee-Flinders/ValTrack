import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { NavMain } from "@/components/nav-main"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <div className="flex justify-center items-center min-h-screen w-full p-2">
        <div className=" border-2 border-solid w-full h-full bg-white rounded-xl p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}