import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
interface SelectHookProps {
    value: string,
    page: number,
}

export const useSelectHook = ({ value, page }: SelectHookProps) => {
    const [val, setVal] = useState(value)
    const router = useRouter()
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setVal(e.target.value)
        router.push(`?${e.target.value && `genre=${e.target.value}&`}page=${page}`, {
            scroll: false,
        })
    }
    return {
        val,
        onChange
    }
}
