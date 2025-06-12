'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function SanityTestPage() {
  const [testResult, setTestResult] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/sanity-test')
      .then(res => res.json())
      .then(data => {
        setTestResult(data)
        setLoading(false)
      })
      .catch(error => {
        setTestResult({ success: false, error: error.message })
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Testing Sanity Connection...</h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Sanity CMS Connection Test</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className={`p-4 rounded-lg mb-6 ${
            testResult?.success ? 'bg-green-100 border border-green-400' : 'bg-red-100 border border-red-400'
          }`}>
            <h2 className={`text-lg font-semibold ${
              testResult?.success ? 'text-green-800' : 'text-red-800'
            }`}>
              {testResult?.success ? '✅ Connection Successful!' : '❌ Connection Failed'}
            </h2>
            <p className={testResult?.success ? 'text-green-700' : 'text-red-700'}>
              {testResult?.message}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Connection Details:</h3>
              <ul className="space-y-1 text-gray-600">
                <li><strong>Project ID:</strong> ri3g78rr</li>
                <li><strong>Dataset:</strong> production</li>
                <li><strong>API Version:</strong> 2023-05-03</li>
              </ul>
            </div>

            {testResult?.success && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Projects Found:</h3>
                <p className="text-gray-600 mb-2">
                  Total projects: {testResult.projectCount}
                </p>
                {testResult.projects && testResult.projects.length > 0 ? (
                  <div className="space-y-2">
                    {testResult.projects.map((project: { _id: string; title: string; category?: string }) => (
                      <div key={project._id} className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-sm text-gray-600">
                          Category: {project.category || 'No category'}
                        </p>
                        <p className="text-xs text-gray-500">ID: {project._id}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No projects found. You can create some in the Sanity Studio.</p>
                )}
              </div>
            )}

            {testResult?.error && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-600">Error Details:</h3>
                <pre className="bg-red-50 p-3 rounded text-sm text-red-700 overflow-auto">
                  {testResult.error}
                </pre>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Next Steps:</h3>
            <div className="space-y-2">
              <Link
                href="/studio"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Open Sanity Studio
              </Link>
              <p className="text-sm text-gray-600">
                Access the Sanity Studio to create and manage your content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
