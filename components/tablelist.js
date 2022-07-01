import {useTable, useFilters, useAsyncDebounce, usePagination} from "react-table"
import { useGlobalFilter } from "react-table/dist/react-table.development"
import GlobalFilter from "./globalfilter"
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import Link from "next/link"



const TableList = ({columns, data}) => {

    const {getTableProps, 
            getTableBodyProps, 
            headerGroups, 
            rows, 
            prepareRow,
            page,
            canPreviousPage,
            canNextPage,
            pageOptions,
            pageCount,
            gotoPage,
            nextPage,
            previousPage,
            setPageSize,
            state,
            preGlobalFilteredRows,
            setGlobalFilter,
        } = useTable({columns, data}, useFilters, useGlobalFilter, usePagination)

    return (
        <>
        <div className="flex gap-x-2">
            <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} 
                     globalFilter={state.globalFilter}
                     setGlobalFilter={setGlobalFilter} />
        {headerGroups.map((headerGroup) => 
            headerGroup.headers.map((column) => 
                column.Filter ? (
                    <div key={column.id}>
                        {/* <label for={column.id}>{column.render("Header")}: </label> */}
                        {column.render("Filter")}
                    </div>
                ) : null
            )
        )}
        </div>
        
        <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table {...getTableProps()} border="1" className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...column.getHeaderProps()}>{column.render("Header")}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" {...getTableBodyProps()}>
                            {page.map((row, i) => {
                                prepareRow(row);
                                return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => {
                                                return <td className="px-6 py-4 whitespace-nowrap" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                            })}
                                        </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="py-3 flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
                </button>{' '}
            </div>
           <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex gap-x-2">
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={state.pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                        >
                        {[5, 10, 20].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button className="rounded-l-md relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            <span className="sr-only">1er</span>
                            <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <span className="sr-only">Précedent</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => nextPage()} disabled={!canNextPage}>
                        <span className="sr-only">Suivant</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button className="rounded-r-md relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        <span className="sr-only">Last</span>
                        <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </nav>
           </div> 
        </div>
        
        </>
    )
}

export default TableList;