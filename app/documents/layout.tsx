import Sidebar from '@/components/Sidebar';

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 pt-16 md:ml-60 min-h-screen bg-gray-100">
        {children}
      </main>
    </div>
  );
}
