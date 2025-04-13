'use client';

import BackButton from '@/components/BackButton';
import { useState } from 'react';

export default function IngestionPage() {
    const [isIngesting, setIsIngesting] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    const handleIngestion = () => {
        setIsIngesting(true);
        setStatus('Ingestion started...');

        // Simulate ingestion delay
        setTimeout(() => {
            setIsIngesting(false);
            setStatus('✅ Ingestion completed successfully!');
        }, 3000);
    };

    return (
        <>
        <div className='flex justify-end'>
                    <BackButton />
                </div>
            <div className="min-h-screen  flex items-center justify-center p-4">
                
                <div className="max-w-xl w-full bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4 text-center">🔄 Ingestion Management</h1>

                    <p className="mb-6 text-gray-600 text-center">
                        Click the button below to trigger the document ingestion process.
                    </p>

                    <div className="flex justify-center">
                        <button
                            onClick={handleIngestion}
                            disabled={isIngesting}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
                        >
                            {isIngesting ? 'Ingesting...' : 'Start Ingestion'}
                        </button>
                    </div>

                    {status && (
                        <div className="mt-6 text-center text-green-600 font-medium">
                            {status}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
