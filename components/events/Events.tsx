import { SectionHeader } from "../SectionHeader"
import EventBox from "./EventBox"

export interface IEvent {
  id: number,
  date: string,
  location: {
    city: string,
    country: string,
    address: string
  },
  priceRange: {
    min: number,
    max: number,
    currency: string
  }
}

async function getEvents(): Promise<IEvent[]> {
  const res = await fetch(`${process.env.DB_BASE_URL}/events`)
  return res.json()
}

export const Events = async () => {
  const events = await getEvents()
  
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle="World Tour" title="Upcoming Events" />
        <EventBox events={events}/>
      </div>
    </section>
  )
}
