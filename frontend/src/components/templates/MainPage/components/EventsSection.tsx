"use client";

import cx from "classnames";

import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import ClientOnly from "@/components/organisms/header/_components/ClientOnly";
import Typography from "@/components/atoms/typography/Typography";
import { EventCard } from "./EventCard";

import type { Maybe, ComponentContentBlocksEvent } from "@/types";

import styles from "./EventsSection.module.css";


interface EventsSectionProps {
  events: Maybe<ComponentContentBlocksEvent>[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  const { closestPastEvent, closestFutureEvent } = getClosestEvents(events);
  const isSmall = useMediaQuery([BREAKPOINTS.mobile]);

  const eventCount = calcEventsCount({ closestPastEvent, closestFutureEvent });

  const cartOrientation = calcCartOrientation(isSmall, eventCount);

  return (
    <div className={styles.eventsContainer}>

      <ClientOnly fallback={null}>
        {closestFutureEvent && (
          <div className={styles.event}>
            <div className={styles.eventType}>
              <Typography tag="H2" overideFont={{ fontWeight: "extra-bold" }}>Грядущие мероприятия</Typography>
            </div>

            <EventCard event={closestFutureEvent} type="future" orientation={cartOrientation} />
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

            <EventCard event={closestPastEvent} type="past" orientation={cartOrientation} />
          </div>
        )}

      </ClientOnly>
    </div>

  );
};

type Events = {
  closestPastEvent?: ComponentContentBlocksEvent,
  closestFutureEvent?: ComponentContentBlocksEvent
};

const getClosestEvents = (events: Maybe<ComponentContentBlocksEvent>[])
  : Events => {
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


const calcEventsCount = (events: Events): number => {
  return Object.values(events).filter(value => value !== undefined).length;
};

const calcCartOrientation =
  (isSmallScreen: boolean, cartCount: number): "vertical" | "horizontal" => {
    if (isSmallScreen) {
      return "vertical";
    }

    return cartCount < 2 ? "horizontal" : "vertical";
  };
