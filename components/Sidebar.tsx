'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Dashboard', href: '/documents' },
  { label: 'Upload', href: '/documents/upload' },
  { label: 'Q&A', href: '/qa' },
  { label: 'Ingestion', href: '/ingestion' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 text-lg z-[1100] bg-blue-700 text-white px-4 py-2 rounded-md shadow-lg"
          onClick={() => setOpen(true)}
        >
          ☰ Menu
        </button>
      )}

      {/* Overlay for Mobile */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-[1050]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {(open || !isMobile) && (
          <motion.aside
            key="sidebar"
            className="fixed top-0 left-0 h-full w-64 bg-blue-900 text-white p-5 z-[1100]"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">📂 DocManager</h2>
              {isMobile && (
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-xl hover:text-gray-300"
                >
                  ✕
                </button>
              )}
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-md transition-all hover:bg-blue-800 ${
                    isActive(item.href)
                      ? 'bg-blue-700 font-semibold shadow-inner'
                      : ''
                  }`}
                  onClick={() => isMobile && setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
