// components/BackButton.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-4 px-4 py-2 bg-black text-[#fff] text-sm rounded transition"
    >
      ← Back
    </button>
  );
}
