'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

export default function ThemeSwitcher() {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSetTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if(!mounted) return null

  return (
    <Button radius="full" size="sm" onClick={handleSetTheme}>
      {theme === "dark" ? (
        <span>light</span>
      ) : (
        <span>dark</span>
      )}
    </Button>
  )
}
