import Sidebar from '@/components/Sidebar';

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar (fixed inside, handles mobile toggle itself) */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 pt-20 md:pt-6 md:ml-60 min-h-screen bg-gray-100">
        {children}
      </main>
    </div>
  );
}
