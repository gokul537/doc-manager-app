// app/layout.tsx
"use client";
import LogoutButton from '@/components/Logout'
import './globals.css'
import { ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// export const metadata = {
//   title: 'Document Manager',
//   description: 'Next.js App with Auth and Document Upload',
// }

export default function RootLayout({ children }: { children: ReactNode }) {


  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const isAuthPage = pathname === '/login' || pathname === '/signup'
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold ml-36 md:ml-0">📄 Doc Manager</h1>
            {!isAuthPage && isLoggedIn && <LogoutButton />}
          </header>

          {/* Main content */}
          <main className="flex-1 p-4">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-100 text-center py-2 text-sm">
            © 2025 Your Company
          </footer>
        </div>
      </body>
    </html>
  )
}
