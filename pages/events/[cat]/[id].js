import { useRef, useState } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import path from "../../../data/index.json";
import Button from "../../../src/components/Button";
import styles from "../../../styles/CityEvent.module.css";

export default function Event({ currentEvent }) {
  const emailInput = useRef()
  const router = useRouter()
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const emailValue = emailInput.current.value;
    const eventId = router?.query.id;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }

    try {
      const response  = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      })

      if (!response.ok) {
        throw new Error(
          `Error: ${response.status} and this is where we are...`
        );
      }

      const data = await response.json();
      setMessage(data.message)
      emailInput.current.value = ""

    } catch (err) {
      console.error('ERROR: ', err)
    }
  }

  return (
    <>
      <header>
        <h1 className={styles.title}>{currentEvent.title}</h1>
      </header>
      <section>
        <Image
          src={currentEvent.image}
          width={600}
          height={600}
          alt={currentEvent.title}
        />
        <p className={styles.text}>{currentEvent.description}</p>
      </section>
      <section className={styles.register}>
        <div className={styles['form-container']}>
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              Get Registered for this event!
            </label>
            <div className={styles.form}>
              <input
                ref={emailInput}
                type="email"
                id="email"
                placeholder="Please insert your email here"
                className={styles["input-form"]}
              />
              <Button type="submit" />
            </div>
          </form>
        </div>
        <p>{message}</p>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const { allEvents } = await path;
  const paths = allEvents.map(path => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  })

  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps(context) {
  console.log('deep context: ', context)
  const id = context.params.id
  const { allEvents } = await path;
  const currentEvent = allEvents.find(event => id === event.id)

  return {
    props: { currentEvent }
  }
}
