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

export const Events = async () => {  
  return (
    <section id="tours" className="section">
      <div className="container mx-auto">
        <SectionHeader pretitle="World Tour" title="Upcoming Events" />
        <EventBox />
      </div>
    </section>
  )
}
