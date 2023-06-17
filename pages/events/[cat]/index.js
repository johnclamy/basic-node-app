import Link from 'next/link'
import Image from 'next/image'
import path from '../../../data/index.json'
import styles from '../../../styles/CityEvents.module.css'

export default function EventCategory({ data, city }) {
  return (
    <article className={styles["article-container"]}>
      <header>
        <h1 className={styles.title}>
          Events in <b className={styles.city}>{city}</b>
        </h1>
      </header>
      <section className={styles.article}>
        {data.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
            passHref
          >
            <a>
              <Image
                width={300}
                height={300}
                alt={event.title}
                src={event.image}
              />
              <h2 className={styles["city-title"]}>{event.title}</h2>
              <p className={styles.text}>{event.description}</p>
            </a>
          </Link>
        ))}
      </section>
    </article>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await path;
  const paths = events_categories.map(event => {
    return {
      params: {
        cat: event.id.toString()
      }
    }
  })
  console.log('paths: ', paths)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  console.log('context:', context)
  const city = context?.params.cat
  const { allEvents } = await path;
  const data = allEvents.filter(event => event.city === city)

  return {
    props: { data, city }
  }
}
