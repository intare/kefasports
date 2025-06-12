'use client'

import { NextStudio } from 'next-sanity/studio'

// Import the config
import config from '../../../../sanity.config'

export default function StudioPage() {
  return (
    <div style={{ height: '100vh' }}>
      <NextStudio config={config} />
    </div>
  )
}
