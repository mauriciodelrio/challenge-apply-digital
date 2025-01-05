import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CardItem, HeaderFilters } from "@/components"
import { fetchService } from "@/services"
import { Game } from "../utils/endpoint"

export default function Home() {
  
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
        page: changeGender ? 1 : fetchPage
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

  return (
    <main className='h-full'>
      <div className='flex max-w["1280px"] gap-12 flex-row flex-wrap justify-center py-12 px-32'>
        <HeaderFilters genre={genre} availableFilters={availableFilters} />
        <>
          {
            data?.map((game, index) => {
              return <CardItem key={index} genre={game.genre} image={game.image} name={game.name} price={game.price} isNew={game.isNew} />
            })
          }
        </>
      </div>
      <div className='max-w["1280px"] gap-12 px-48 mt-8 mb-40'>
          {
            loading ? 
            <div className='flex justify-center items-center w-full h-32'>Loading...</div> :
            fetchPage < totalPages && <button className='flex w-fit rounded-md px-6 py-2 gap-2 bg-cta-fill-primary text-white' onClick={() => setFetchPage((prevPage) => prevPage + 1)}>SEE MORE</button>
          }
      </div>
    </main>
  )
}
