'use client'

import { usePathname } from 'next/navigation'
import { Tabs, Tab } from '@nextui-org/react'
import NextLink from 'next/link'

export default function MainTabs({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <Tabs aria-label="Options" selectedKey={pathname} fullWidth className={className}>
      <Tab as={NextLink} key="/" title="Home" href="/" />
      <Tab as={NextLink} key="/works" title="Works" href="/works" />
    </Tabs>
  )
}
