import { Events, Hero, IEvent } from "@/components";

async function getEvents(): Promise<IEvent[]> {
  const res = await fetch(`${process.env.DB_BASE_URL}/events`)
  return res.json()
}

export default async function Home() {
  const events = await getEvents()

  return (
    <main>
      <Hero events={events} />
      <Events events={events} />
      <div className="h-[4000px]"></div>
    </main>
  );
}
