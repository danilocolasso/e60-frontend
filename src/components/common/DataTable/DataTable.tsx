import { DataTableBody } from '@/components/common/DataTable/DataTableBody.tsx'
import { DataTableHead } from '@/components/common/DataTable/DataTableHead.tsx'
import { DataTableLoading } from '@/components/common/DataTable/DataTableLoading.tsx'
import { DataTablePagination } from '@/components/common/DataTable/DataTablePagination.tsx'
import { Table } from '@/components/ui/Table'
import { PaginatedPayload } from '@/types/PaginatedPayload.ts'
import { PaginatedResponse } from '@/types/PaginatedResponse.ts'
import React, { ComponentType, SVGProps, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export interface DataTableColumn<T> {
  key: keyof T
  label: string
  sortable?: boolean
  value?: (row: T) => string | React.ReactNode
}

export interface DataTableAction<T>
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  label?: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  onClick: (item: T) => void
}

export interface DataTableProps<T> {
  service: (params: PaginatedPayload) => Promise<PaginatedResponse<T>>
  columns: DataTableColumn<T>[]
  actions?: DataTableAction<T>[]
  sort?: keyof T | undefined
  order?: 'asc' | 'desc' | undefined
  pagination?: boolean
  full?: boolean
  striped?: boolean
}

export const DataTable = <T,>({
  service,
  columns,
  actions,
  sort: defaultSort,
  order: defaultOrder,
  pagination = true,
}: DataTableProps<T>) => {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || 1)

  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(page)
  const [lastPage, setLastPage] = useState(1)
  const [sort, setSort] = useState<keyof T | undefined>(defaultSort)
  const [order, setOrder] = useState<'asc' | 'desc' | undefined>(defaultOrder)

  const fetch = async () => {
    setLoading(true)
    try {
      const response = await service({
        current_page: currentPage,
        per_page: perPage,
        sort: sort ? String(sort) : undefined,
      })

      setData(response.data)
      setPerPage(response.per_page)
      setCurrentPage(response.current_page)
      setLastPage(response.last_page)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar os dados. Por favor, tente novamente mais tarde',
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSort = (key: keyof T) => {
    const toggleOrder = sort === key && order === 'asc' ? 'desc' : 'asc'
    setSort(key)
    setOrder(toggleOrder)
  }

  useEffect(() => {
    fetch()
  }, [currentPage, sort, order])

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  if (loading) {
    return <DataTableLoading />
  }

  return (
    <>
      <Table
        striped
        bleed
        className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]"
      >
        <DataTableHead<T>
          columns={columns}
          actions={actions}
          sort={sort}
          order={order}
          onSort={handleSort}
        />
        <DataTableBody data={data} columns={columns} actions={actions} />
      </Table>
      {pagination && (
        <DataTablePagination currentPage={currentPage} lastPage={lastPage} />
      )}
    </>
  )
}
