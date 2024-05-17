import Image from "next/image"
import { IEvent } from "./Events"

interface EventBoxProps {
  events: IEvent[]
}

const EventBox = ({ events }: EventBoxProps) => {
  function getDay(date: string): number {
    return (new Date(date)).getDate()
  }

  function getMonth(date: string): string {
    return (new Date(date)).toLocaleDateString("en-US", { weekday: "short" })
  }

  return (
    <div className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        {/* image */}
        <div className="hidden xl:flex w-[400px]">
          <Image 
            alt=""
            src="/assets/events/singer.png"
            width={358}
            height={489}
            quality={100}
            priority
          />
        </div>
        {/* event list */}
        <ul className="flex-1 bg-purple-400/10 h-[500px] flex flex-col">
          {events.map(event => (
            <li key={event.id}>
              {/* <div> */}
                {/* <div> */}
                  <div>{getDay(event.date)}</div>
                  <div>{getMonth(event.date)}</div>
                {/* </div> */}
              {/* </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EventBox