'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    router.push('/login');
  }, [router]);

  return (
    <motion.button
      onClick={handleLogout}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-red-600 text-white px-4 py-2 mt-5 rounded-md hover:bg-red-700 transition text-sm sm:text-base w-[100px] sm:w-max block mx-auto"
    >
      🔓 Logout
    </motion.button>
  );
}
