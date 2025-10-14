'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function CMSLoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  // Check if user is already authenticated with Sanity
  useEffect(() => {
    // Check if there's an existing Sanity session
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/check-auth')
        if (response.ok) {
          const { isAuthenticated } = await response.json()
          if (isAuthenticated) {
            // Redirect to studio if already authenticated
            router.push('/studio')
          }
        }
      } catch (err) {
        console.error('Auth check failed:', err)
      }
    }

    checkAuth()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // For Sanity, we'll redirect directly to the studio
      // Sanity handles its own authentication
      router.push('/studio')
    } catch (err) {
      setError('Authentication failed. Please try again.')
      setIsLoading(false)
    }
  }

  const handleQuickAccess = () => {
    router.push('/studio')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-gray-800 to-brand-dark flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-brand-accent rounded-full p-4">
              <svg
                className="h-12 w-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            KefaSports CMS
          </h2>
          <p className="text-brand-lighterGray">
            Content Management System
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-dark mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-brand-dark rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent focus:z-10 sm:text-sm"
                placeholder="admin@kefasports.com"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-brand-dark mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-brand-dark rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent focus:z-10 sm:text-sm"
                placeholder="••••••••"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-brand-accent focus:ring-brand-accent border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-brand-secondary"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-brand-accent hover:text-brand-dark"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign in to CMS'
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-brand-secondary">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Quick Access */}
            <div className="mt-6">
              <button
                type="button"
                onClick={handleQuickAccess}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-brand-dark bg-white hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-2 text-brand-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Sanity Studio Login
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-brand-lighterGray">
            Protected by Sanity Authentication
          </p>
          <div className="mt-2">
            <a
              href="/"
              className="text-sm text-brand-accent hover:text-white transition-colors"
            >
              ← Back to Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
