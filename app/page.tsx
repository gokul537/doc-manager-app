// app/page.tsx
import './globals.css'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/login') // auto-redirect to login page
}
