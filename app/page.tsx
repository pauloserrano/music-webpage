import { Albums, Blog, Events, Hero, IEvent, Newsletter, Player } from "@/components";

async function getEvents(): Promise<IEvent[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/events`)
  return res.json()
}

export default async function Home() {
  const events = await getEvents()

  return (
    <main>
      <Hero events={events} />
      <Player />
      <Events events={events} />
      <Albums />
      <Blog />
      <Newsletter />
      <div className="h-[500px]"></div>
    </main>
  );
}
