'use client';

import { FilePlus, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function DocumentsPage() {
  return (
    <div className="p-6 w-full min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">📄 Documents Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome! Manage and interact with your documents here.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Document Card */}
          <Link href="/documents/upload">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer group border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full group-hover:bg-blue-200 transition">
                  <FilePlus className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                    Upload Document
                  </h2>
                  <p className="text-sm text-gray-500">Add a new document to your collection.</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Q&A Card */}
          <Link href="/qa">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer group border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-full group-hover:bg-green-200 transition">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-green-700">
                    Ask a Question
                  </h2>
                  <p className="text-sm text-gray-500">Get answers based on your uploaded documents.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
