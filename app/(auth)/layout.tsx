import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if(loggedIn) redirect('/')

    return (
      <div className="flex-1 justify-center items-center min-h-screen w-100 p-2">
        {children}
    </div>
    );
  }

  