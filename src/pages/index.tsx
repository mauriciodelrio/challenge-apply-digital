import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { CardItem, HeaderFilters } from "@/components"
import { useLoadDataHook } from "@/hooks"

const Home = () => {
  
  const { genre, availableFilters, data, fetchPage, loading, totalPages, handleSetPage } = useLoadDataHook()

  return (
    <div className='h-full'>
      <div className='flex max-w["1280px"] gap-12 flex-row flex-wrap justify-center py-12 md:px-32 px-4'>
        <HeaderFilters genre={genre} availableFilters={availableFilters} />
        <>
          {
            data?.map((game, index) => {
              return <CardItem key={index} genre={game.genre} image={game.image} name={game.name} price={game.price} isNew={game.isNew} description={game.description} />
            })
          }
        </>
      </div>
      <div className='max-w["1280px"] gap-12 px-12 md:px-48 md:mt-8 mt-0 mb-40'>
          {
            loading ? 
            <div className='flex justify-center items-center w-full h-32'><ArrowPathIcon className='size-12 text-gray-800 animate-spin'/></div> :
            fetchPage < totalPages && <button className='flex w-full md:w-fit justify-center rounded-md px-6 py-2 gap-2 bg-cta-fill-primary text-white' onClick={handleSetPage}>SEE MORE</button>
          }
      </div>
    </div>
  )
}

export default Home
