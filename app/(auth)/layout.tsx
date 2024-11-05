 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 justify-center items-center min-h-screen w-100 p-2">
        {children}
    </div>
  )
}