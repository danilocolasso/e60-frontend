import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/ui/Pagination'
import {
  PaginationFirst,
  PaginationLast,
} from '@/components/ui/Pagination/Pagination.tsx'

interface DataTablePaginationProps {
  currentPage: number
  lastPage: number
}

export const DataTablePagination = ({
  currentPage,
  lastPage,
}: DataTablePaginationProps) => {
  const createPageUrl = (pageNumber: number) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('page', pageNumber.toString())
    return `${location.pathname}?${searchParams.toString()}`
  }

  if (lastPage <= 6) {
    const pages = Array.from({ length: lastPage }, (_, i) => i + 1)
    return (
      <Pagination className="mt-6">
        <PaginationPrevious
          href={createPageUrl(Math.max(1, currentPage - 1))}
        />
        <PaginationList>
          {pages.map((page) => (
            <PaginationPage
              key={page}
              current={page === currentPage}
              href={createPageUrl(page)}
            >
              {page}
            </PaginationPage>
          ))}
        </PaginationList>
        <PaginationNext
          href={createPageUrl(Math.min(lastPage, currentPage + 1))}
        />
      </Pagination>
    )
  }

  const rightPages = [lastPage - 2, lastPage - 1, lastPage]
  let leftPages
  if (currentPage > lastPage - 3) {
    const stableStart = Math.max(1, rightPages[0] - 3)
    leftPages = [stableStart, stableStart + 1, stableStart + 2]
  } else {
    const startPage = Math.max(1, currentPage - 2)
    const length = Math.max(3, currentPage - startPage + 1)
    leftPages = Array.from({ length }, (_, i) => startPage + i)
  }

  return (
    <Pagination className="mt-6">
      {currentPage > 1 ? (
        <PaginationFirst href={createPageUrl(1)}>Primeira</PaginationFirst>
      ) : (
        <PaginationFirst>Primeira</PaginationFirst>
      )}
      {currentPage > 1 ? (
        <PaginationPrevious href={createPageUrl(Math.max(1, currentPage - 1))}>
          Anterior
        </PaginationPrevious>
      ) : (
        <PaginationPrevious>Anterior</PaginationPrevious>
      )}
      <PaginationList>
        {leftPages.map((page) => (
          <PaginationPage
            key={page}
            current={page === currentPage}
            href={createPageUrl(page)}
          >
            {page}
          </PaginationPage>
        ))}

        {currentPage < lastPage - 3 && <PaginationGap />}

        {rightPages.map((page) => (
          <PaginationPage
            key={page}
            current={page === currentPage}
            href={createPageUrl(page)}
          >
            {page}
          </PaginationPage>
        ))}
      </PaginationList>
      {currentPage < lastPage ? (
        <PaginationNext
          href={createPageUrl(Math.min(lastPage, currentPage + 1))}
        >
          Próxima
        </PaginationNext>
      ) : (
        <PaginationNext>Próxima</PaginationNext>
      )}
      {currentPage < lastPage ? (
        <PaginationLast href={createPageUrl(lastPage)}>Última</PaginationLast>
      ) : (
        <PaginationLast>Última</PaginationLast>
      )}
    </Pagination>
  )
}
