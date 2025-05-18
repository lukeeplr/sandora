import NavBar from "@/components/shared/NavBar"

function Layout({children}: { children: React.ReactNode}) {
  return (
    <>
      <NavBar />
      <main className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {children}
      </main>
    </>
  )
}

export default Layout