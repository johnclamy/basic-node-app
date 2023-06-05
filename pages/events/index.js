import Image from "next/image";
import Link from "next/link";

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
    <main>
      <header>
        <h1>events</h1>
      </header>
      <ul>
        {events.map(({ imgFileName, location, slogan }) => (
          <li key={location}>
            <Link href={`/events/${location.toLowerCase()}`}>
              <a>
                <figure>
                  <Image
                    width={150}
                    height={150}
                    alt={`Events in ${location}`}
                    src={`/imgs/${imgFileName}`}
                  />
                  <figcaption>
                    <h3>{location}</h3>
                    <p>{slogan}</p>
                  </figcaption>
                </figure>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}