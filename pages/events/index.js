import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Events.module.css";

const eventsData = [
  {
    imgFileName: "london-events.png",
    location: "London",
    slogan: "Where the world gets together to work.",
  },
  {
    imgFileName: "paris-events.png",
    location: "Paris",
    slogan: "Put your ideas to work today.",
  },
  {
    imgFileName: "lisbon-events.png",
    location: "Lisbon",
    slogan: "Sun, sea and work. The perfect combination.",
  },
];

export default function Events() {
  const [events, setEvents] = useState(eventsData)
  return (
    <div>
      <header>
        <h1 className={styles.title}>events</h1>
      </header>
      <div className={styles.wrapper}>
        <ul className={styles.container}>
          {events.map(({ imgFileName, location, slogan }) => (
            <li key={location} className={styles.event}>
              <Link href={`/events/${location.toLowerCase()}`} passHref>
                <a>
                  <figure className={styles.figure}>
                    <Image
                      width={300}
                      height={300}
                      alt={`Events in ${location}`}
                      src={`/imgs/${imgFileName}`}
                      className={styles.image}
                    />
                    <figcaption>
                      <h3 className={styles["category-title"]}>{location}</h3>
                      <p className={styles.text}>{slogan}</p>
                    </figcaption>
                  </figure>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}