"use client";

import Image from "next/image";
import cx from "classnames";

import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import Typography from "@/components/atoms/typography/Typography";
import Button from "@/components/atoms/Button/Button";

import type { ComponentContentBlocksEvent } from "@/types";

import styles from "./EventCard.module.css";


type EventCardProps = {
  event: ComponentContentBlocksEvent;
  type: "future" | "past";
  orientation?: "vertical" | "horizontal";
}

export const EventCard: React.FC<EventCardProps> = ({ event, type, orientation = "vertical" }) => {
  const isSmall = useMediaQuery([BREAKPOINTS.mobile, BREAKPOINTS.tabletMin]);

  const imageInfo = event.image.eventImage;
  const imagePath = `http://${process.env.NEXT_PUBLIC_BACKEND_URL}${isSmall ? imageInfo.formats["small"]?.url : imageInfo.url}`;

  const date = parseDate(event.date);

  return (
    <div className={cx(styles.eventCardContainer, {
      [styles.horizontalOrientation]: orientation === "horizontal",
      [styles.verticalOrientation]: orientation === "vertical",
    })}>

      <div className={cx(styles.textContainer)}>
        <div className={styles.description}>
          <div>
            <Typography tag="H3" overideFont={{ fontWeight: "extra-bold" }}>{event.title}</Typography>
            <Typography tag="body">{event.description}</Typography>
          </div>
          <div className={styles.additionaldetails}>
            <div className={styles.time}>
              <Typography tag="body" overideFont={{ fontWeight: "extra-bold" }}>Время:&nbsp;</Typography>
              <Typography tag="body" >{date.time}</Typography>
            </div>

            <div className={styles.place}>
              <Typography tag="body" overideFont={{ fontWeight: "extra-bold" }}>Место:&nbsp;</Typography>
              <Typography tag="body">{event.place}</Typography>
            </div>

            <div className={styles.date}>
              <Typography tag="body" overideFont={{ fontWeight: "extra-bold" }}>Дата:&nbsp;</Typography>
              <Typography tag="body">{date.day} {date.month}</Typography>
            </div>

          </div>

          {event.Button &&
            <Button
              isExternal={event.Button?.isExternal}
              link={event.Button?.Button_link}
              variant="ghost"
              text={event.Button?.Button_text || "Узнать больше"}
              on="onLight"
              size="M"
              wide={false}
              rounded
            />
          }
        </div>
      </div>

      <div className={styles.imageContainer}>
        {imagePath && <Image
          id={event.date}
          src={imagePath}
          objectFit={"cover"}
          loading="lazy"
          layout="fill"
          alt={`Фото с ${type === "past" ? "прошедшего" : "будущего"} мероприятия`}
          className={styles.image}
        />}
      </div>

    </div>
  );
};

function parseDate(date: string): { month: string, day: string, time: string } {
  const parsedDate = new Date(date);

  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июню",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const month = monthNames[parsedDate.getUTCMonth()]; // Get the month abbreviation
  const day = String(parsedDate.getUTCDate()).padStart(2, "0"); // Format day to always have 2 digits

  const hours = String(parsedDate.getUTCHours()).padStart(2, "0"); // Format hours to always have 2 digits
  const minutes = String(parsedDate.getUTCMinutes()).padStart(2, "0"); // Format minutes to always have 2 digits
  const time = `${hours}:${minutes}`;

  return { month, day, time };
}

