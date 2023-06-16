import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Welcome to Tech Events | Find the best Web Dev events</title>
      </Head>
      <header>
        <div>
          <h1 className={styles.title}>
            Welcome to Tech Events. Here you will find the best{" "}
            <em>Web Development</em> events.
          </h1>
          <p className={styles.subtitle}>
            We have a list of all the major web tech event you can find in
            Europe. Book with us at <strong>no extra cost</strong>.
          </p>
          <p>
            Think <b>Tech Events</b> 👍
          </p>
        </div>
        <figure className={styles["events-img"]}>
          <Image src="/imgs/hero.png" alt="events" width={165} height={165} />
        </figure>
      </header>
      <hr />
      <section>
        {categories.map(({ id, title, description, image }) => (
          <Link key={id} href={`/events/${id}`}>
            <a>
              <Image src={image} alt={title} width={640} height={426} />
              <div className={styles['category-info']}>
                <h2>{title}</h2>
                <div className={styles['title-underline']}></div>
                <p>{description}</p>
              </div>
            </a>
          </Link>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import('../data/index.json')

  return {
    props: { categories: events_categories },
  };
}
