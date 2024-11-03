 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-screen w-full p-2">
        {children}
    </div>
  )
}