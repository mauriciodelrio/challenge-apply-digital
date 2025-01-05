import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { fetchService } from "@/services"
import { Game } from "../utils/endpoint"

export const useLoadDataHook = () => {
    const params = useSearchParams()
    const genre = params?.get('genre') ?? ''
    const page = params?.get('page') ?? 1
    const [availableFilters, setAvailableFilters] = useState<string[]>([])
    const [data, setData] = useState<Game[]>([])
    const [fetchPage, setFetchPage] = useState<number>(page as number)
    const [loading, setLoading] = useState<boolean>(false)
    const [totalPages, setTotalPages] = useState<number>(0)
    const router = useRouter()
    // set url param default 

    const fetchData = async (changeGender = false) => {
        changeGender && setData([])
        changeGender && setFetchPage(1)
        setLoading(true)
        fetchService({
        method: 'GET',
        params: {
            genre: genre,
            page: changeGender ? '1' : fetchPage.toString()
        }
        }).then(res => {
        router.push(`?${ genre && `genre=${genre}&`}page=${changeGender ? 1 : fetchPage}`, {
            scroll: false,
        })
        !availableFilters && setAvailableFilters(res?.availableFilters)
        changeGender ? setData(res?.games) : setData([...data, ...res?.games])
        !totalPages && setTotalPages(res?.totalPages)
        setLoading(false)
        })
    }

    useEffect(() => {
        fetchData(true)
    }, [genre])

    useEffect(() => {
        if (fetchPage > 1 && fetchPage <= totalPages) {
        fetchData();
        }
    }, [fetchPage]);

    const handleSetPage = () => {
        setFetchPage((prevPage) => prevPage + 1)
    }

    return {
        genre,
        availableFilters,
        data,
        fetchPage,
        loading,
        totalPages,
        handleSetPage
    }
}
