import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/ui/primitives/Pagination'
import {
  PaginationFirst,
  PaginationLast,
} from '@/components/ui/primitives/Pagination/Pagination.tsx'

interface DataTablePaginationProps {
  currentPage: number
  lastPage: number
  onPageChange: (page: number) => void
}

export const DataTablePagination = ({
  currentPage,
  lastPage,
  onPageChange,
}: DataTablePaginationProps) => {
  if (lastPage <= 6) {
    const pages = Array.from({ length: lastPage }, (_, i) => i + 1)
    return (
      <Pagination className="mt-6">
        <PaginationPrevious
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        />
        <PaginationList>
          {pages.map((page) => (
            <PaginationPage
              key={page}
              current={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PaginationPage>
          ))}
        </PaginationList>
        <PaginationNext
          onClick={() => onPageChange(Math.min(lastPage, currentPage + 1))}
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
      <PaginationFirst
        className={'hidden md:block'}
        onClick={currentPage > 1 ? () => onPageChange(1) : undefined}
      >
        Primeira
      </PaginationFirst>

      <PaginationPrevious
        onClick={
          currentPage > 1
            ? () => onPageChange(Math.max(1, currentPage - 1))
            : undefined
        }
      >
        Anterior
      </PaginationPrevious>

      <PaginationList>
        {leftPages.map((page) => (
          <PaginationPage
            key={page}
            current={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PaginationPage>
        ))}

        {currentPage < lastPage - 3 && <PaginationGap />}

        {rightPages.map((page) => (
          <PaginationPage
            key={page}
            current={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PaginationPage>
        ))}
      </PaginationList>

      <PaginationNext
        onClick={
          currentPage < lastPage
            ? () => onPageChange(Math.min(lastPage, currentPage + 1))
            : undefined
        }
      >
        Próxima
      </PaginationNext>

      <PaginationLast
        className={'hidden md:block'}
        onClick={
          currentPage < lastPage ? () => onPageChange(lastPage) : undefined
        }
      >
        Última
      </PaginationLast>
    </Pagination>
  )
}
