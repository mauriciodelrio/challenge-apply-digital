'use client'
import { useSelectHook } from '../hooks/useSelectHook'
import { availableFilters } from '../utils/endpoint';

interface Props {
    genre: string;
    availableFilters: string[];
}

export const HeaderFilters = ({ genre }: Props) => {
    let { val, onChange } = useSelectHook({ value: genre ?? '', page: 1 })
    return (
        <div className='px-32 py-12 border-b border-stroke-tertiary flex flex-col gap-12 w-full'>
            <div className='text-2xl font-bold text-gray-medium'>Top Sellers</div>
            <div className='flex justify-end items-end gap-12'>
                <div className='text-xs font-bold text-primary'>Genre</div>
                <div className='text-xs text-primary'>|</div>
                <div className='text-xs text-primary'>
                    <select name="filter" id="filter" className='text-xs font-bold text-primary' value={val} onChange={onChange}>
                        <option value="">All</option>
                        {availableFilters.map((filter, index) => {
                            return <option key={index} value={filter}>{filter}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}
