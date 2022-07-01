import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table'
import { useState } from 'react'
import 'regenerator-runtime/runtime'

const GlobalFilter = ({preGlobalFilteredRows, globalFilter, setGlobalFilter}) => {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <label className="flex gap-x-2 items-baseline">  
        <span className="text-gray-700">
            Search: {' '}
            <input value={value || ""}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);}} 
                        placeholder={`${count} records...`}
                        type="text"
                        className="mt-1 inline rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
        </span>
        </label>
    )
} 

export default GlobalFilter;