import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Events.module.css";

const events = [
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
  return (
    <>
      <header>
        <h1 className={styles.title}>events</h1>
      </header>
      <ul>
        {events.map(({ imgFileName, location, slogan }) => (
          <li key={location} className={styles["category-item"]}>
            <Link href={`/events/${location.toLowerCase()}`}>
              <a>
                <figure>
                  <Image
                    width={150}
                    height={150}
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
    </>
  );
}