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
          <header className="bg-blue-600 text-white px-4 py-4 relative z-[50] flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-4">
            <h1 className="text-xl font-bold w-full md:w-auto">📄 Doc Manager</h1>

            {!isAuthPage && isLoggedIn && (
              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <LogoutButton />
              </div>
            )}
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
