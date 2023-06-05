import Link from "next/link";
import Image from "next/image";

export default function Home({ categories }) {
  return (
    <main>
      <header>
        <div>
          <h1>
            Welcome to Tech Events. Here you will find the best{" "}
            <em>Web Development</em> events.
          </h1>
          <p>
            We have a list of all the major web tech event you can find in
            Europe. Book with us at <strong>no extra cost</strong>.
          </p>
          <p>
            Think <b>Tech Events</b>
          </p>
        </div>
        <Image src="/imgs/hero.png" alt="events" width={145} height={145} />
      </header>
      <hr />
      <section>
        {categories.map(({ id, title, description, image }) => (
          <Link key={id} href={`/events/${id}`}>
            <a>
              <Image src={image} alt={title} width={640} height={426} />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </a>
          </Link>
        ))}
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import('../data/index.json')

  return {
    props: { categories: events_categories },
  };
}
