import React, { ComponentType, SVGProps } from 'react'

export interface NavigationItem
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  name: string
  href: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  current?: boolean
  children?: NavigationItem[]
}
