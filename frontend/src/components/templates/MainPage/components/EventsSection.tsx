import cx from "classnames";

import Typography from "@/components/atoms/typography/Typography";
import { Maybe, ComponentContentBlocksEvent } from "@/types";
import { EventCard } from "./EventCard";

import styles from "./EventsSection.module.css";


interface EventsSectionProps {
  events: Maybe<ComponentContentBlocksEvent>[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  const { closestPastEvent, closestFutureEvent } = getClosestEvents(events);

  return (
    <div className={styles.eventsContainer}>

      {closestFutureEvent && (
        <div className={styles.event}>
          <div className={styles.eventType}>
            <Typography tag="H2" overideFont={{ fontWeight: "extra-bold" }}>Грядущие мероприятия</Typography>
          </div>

          <EventCard event={closestFutureEvent} type="future" />
        </div>
      )}

      {closestPastEvent && (
        <div className={styles.event}>
          <div className={cx(styles.eventType, styles.past)}>
            <Typography tag="H2" overideFont={{ fontWeight: "extra-bold" }}>{
              closestFutureEvent ?
                "...А так же прошедшие"
                : "Наши прошедшие мероприятия"}
            </Typography>
          </div>

          <EventCard event={closestPastEvent} type="past" />
        </div>
      )}
    </div>

  );
};

const getClosestEvents = (events: Maybe<ComponentContentBlocksEvent>[]) => {
  const validEvents = events.filter((event): event is ComponentContentBlocksEvent => event !== null && event !== undefined);

  const currentDate = new Date();

  const pastEvents = validEvents
    .filter(event => new Date(event.date) < currentDate);
  const futureEvents = validEvents
    .filter(event => new Date(event.date) >= currentDate);

  const closestPastEvent = pastEvents
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  const closestFutureEvent = futureEvents
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  return { closestPastEvent, closestFutureEvent };
};
