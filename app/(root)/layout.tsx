import { AppSidebar } from "@/components/app-sidebar";
import HeaderBox from "@/components/header-box";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in')

    return (
      <SidebarProvider>
        <AppSidebar/>
        <div className="flex justify-center items-center min-h-screen w-full p-2">
          <div className=" border-2 border-solid w-full h-full bg-white rounded-xl p-6 overflow-y-auto">
            {children}
          </div>
        </div>
      </SidebarProvider>
    );
}
