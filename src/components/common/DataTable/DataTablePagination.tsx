import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/ui/Pagination'

interface DataTablePaginationProps {
  currentPage: number
  lastPage: number
}

export const DataTablePagination = ({
  currentPage,
  lastPage,
}: DataTablePaginationProps) => {
  if (lastPage <= 6) {
    const pages = Array.from({ length: lastPage }, (_, i) => i + 1)
    return (
      <Pagination className="mt-6">
        <PaginationPrevious href={`?page=${Math.max(1, currentPage - 1)}`} />
        <PaginationList>
          {pages.map((page) => (
            <PaginationPage
              key={page}
              current={page === currentPage}
              href={`?page=${page}`}
            >
              {page}
            </PaginationPage>
          ))}
        </PaginationList>
        <PaginationNext href={`?page=${Math.min(lastPage, currentPage + 1)}`} />
      </Pagination>
    )
  }

  const startPage = Math.max(1, currentPage - 2)
  const leftPages = Array.from(
    { length: currentPage - startPage + 1 },
    (_, i) => startPage + i,
  )
  const rightPages = [lastPage - 2, lastPage - 1, lastPage]

  return (
    <Pagination className="mt-6">
      <PaginationPrevious href={`?page=${Math.max(1, currentPage - 1)}`} />
      <PaginationList>
        {leftPages.map((page) => (
          <PaginationPage
            key={page}
            current={page === currentPage}
            href={`?page=${page}`}
          >
            {page}
          </PaginationPage>
        ))}

        <PaginationGap />

        {rightPages.map((page) => (
          <PaginationPage
            key={page}
            current={page === currentPage}
            href={`?page=${page}`}
          >
            {page}
          </PaginationPage>
        ))}
      </PaginationList>
      <PaginationNext href={`?page=${Math.min(lastPage, currentPage + 1)}`} />
    </Pagination>
  )
}
