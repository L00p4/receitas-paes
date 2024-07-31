'use client'

import Main from '@/components/main'
import Navbar from '@/ui/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Main
        title="React Avançado"
        description="TypeScript, ReactJS, NextJS e Styled Components"
      />
    </>
  )
}
