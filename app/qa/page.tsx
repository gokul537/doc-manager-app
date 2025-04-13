'use client';

import BackButton from '@/components/BackButton';
import { useState } from 'react';

export default function QAPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    // Simulate backend response
    setTimeout(() => {
      setAnswer(`This is a mock answer for: "${question}"`);
      setIsLoading(false);
    }, 1500);
  };

  return (
   <>
   <div className='flex justify-end'>
   <BackButton />
   </div>
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">💬 Ask a Question</h1>

        <form onSubmit={handleAsk} className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your question about any uploaded document..."
            rows={4}
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {isLoading ? 'Thinking...' : 'Ask'}
            </button>
          </div>
        </form>

        {answer && (
          <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h2 className="font-semibold mb-2 text-blue-800">Answer:</h2>
            <p className="text-gray-800">{answer}</p>
          </div>
        )}
      </div>
    </div>
   </>
  );
}
