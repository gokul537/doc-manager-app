'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    router.push('/login');
  }, [router]);

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition w-max text-left"
    >
      🔓 Logout
    </button>
  );
}
