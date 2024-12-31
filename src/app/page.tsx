import { CardItem } from "@/components"

export default async function Home() {
  return (
    <main className=''>
      <section className='flex max-w["1280px"] gap-12 flex-row flex-wrap justify-center py-12 px-32'>
        <CardItem genre="GAMES" image="asxasdcvd" productName="Cyberpunk 2077" price="24.29" />
        <CardItem genre="GAMES" image="asxasdcvd" productName="Cyberpunk 2077" price="24.29" />
        <CardItem genre="GAMES" image="asxasdcvd" productName="Cyberpunk 2077" price="24.29" />
        <CardItem genre="GAMES" image="asxasdcvd" productName="Cyberpunk 2077" price="24.29" />
        <CardItem genre="GAMES" image="asxasdcvd" productName="Cyberpunk 2077" price="24.29" />
        <CardItem genre="GAMES" image="asxasdcvd" productName="Cyberpunk 2077" price="24.29" />
      </section>
    </main>
  )
}
