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

interface EventsProps {
  events: IEvent[]
}

export const Events = async ({ events }: EventsProps) => {  
  return (
    <section id="tours" className="section">
      <div className="container mx-auto">
        <SectionHeader pretitle="World Tour" title="Upcoming Events" />
        <EventBox events={events}/>
      </div>
    </section>
  )
}
