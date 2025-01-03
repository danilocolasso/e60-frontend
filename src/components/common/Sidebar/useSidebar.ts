import { navigation } from '@/data/navigationData' // Adjust the import path as needed
import { NavigationItem } from '@/types/navigation-item.ts'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Helper function to normalize paths by removing trailing slashes.
 *
 * @param path - The URL path to normalize.
 * @returns The normalized path.
 */
const normalizePath = (path: string): string => {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
}

/**
 * Determines if the given href is the current route or a parent of the current route.
 *
 * @param href - The navigation item's href.
 * @param pathname - The current location pathname.
 * @returns A boolean indicating if the route is current.
 */
const isCurrentRoute = (href: string, pathname: string): boolean => {
  const normalizedHref = normalizePath(href)
  const normalizedPathname = normalizePath(pathname)

  if (normalizedHref === '/') {
    return normalizedPathname === '/'
  }
  return (
    normalizedPathname === normalizedHref ||
    normalizedPathname.startsWith(`${normalizedHref}/`)
  )
}

/**
 * Recursively marks navigation items as current based on the current pathname.
 *
 * @param item - The navigation item to evaluate.
 * @param pathname - The current location pathname.
 * @returns A new NavigationItem with the `current` property updated.
 */
const markCurrent = (
  item: NavigationItem,
  pathname: string,
): NavigationItem => {
  const isCurrent = isCurrentRoute(item.href, pathname)
  let hasCurrentChild = false

  // Clone the item to avoid mutating the original navigation data
  const newItem: NavigationItem = { ...item }

  if (item.children && item.children.length > 0) {
    newItem.children = item.children.map((child) => {
      const markedChild = markCurrent(child, pathname)
      if (markedChild.current) {
        hasCurrentChild = true
      }
      return markedChild
    })
  }

  newItem.current = isCurrent || hasCurrentChild

  return newItem
}

/**
 * Custom hook to process navigation data and mark current routes.
 *
 * @returns An object containing the processed navigation data.
 */
export const useSidebar = (): { data: NavigationItem[] } => {
  const location = useLocation()

  /**
   * Memoized computation to avoid unnecessary recalculations on each render.
   */
  const data: NavigationItem[] = useMemo(() => {
    return navigation.map((item) => markCurrent(item, location.pathname))
  }, [location.pathname])

  return { data }
}
