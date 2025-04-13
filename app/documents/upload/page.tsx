'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toast.error('Please select a file to upload.');
      return;
    }

    setIsUploading(true);

    const uploadingToast = toast.loading('Uploading document...');

    setTimeout(() => {
      toast.dismiss(uploadingToast);
      toast.success('Document uploaded successfully!');
      setIsUploading(false);
      router.push('/documents');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          📤 Upload New Document
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-semibold mb-2">
              Document Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter document title"
              required
            />
          </div>

          {/* Description Input */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-semibold mb-2">
              Document Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a brief description of the document"
              rows={4}
            />
          </div>

          {/* File Upload Input */}
          <div className="flex flex-col">
            <label htmlFor="file" className="text-sm font-semibold mb-2">
              Select Document File
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Upload Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isUploading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {isUploading ? 'Uploading...' : 'Upload Document'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
