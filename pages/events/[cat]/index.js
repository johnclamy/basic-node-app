import Link from 'next/link'
import Image from 'next/image'
import path from '../../../data/index.json'

export default function EventCategory({ data, city }) {
  return (
    <article>
      <header>
        <h1>Events in {city}</h1>
      </header>
      <section>
        {data.map(event => (
          <Link key={event.id} href={`/events/${event.city}/${event.id}`} passHref>
            <a>
              <Image width={300} height={300} alt={event.title} src={event.image} />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
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
