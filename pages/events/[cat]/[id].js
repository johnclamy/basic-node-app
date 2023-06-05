import { useRef, useState } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import path from "../../../data/index.json";

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
      const rslt = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      })

      if (!rslt.ok) {
        throw new Error(`Error: ${rslt.status}`)
      }

      const data = await rslt.json()
      setMessage(data.message)
      emailInput.current.value = ""
    } catch (err) {
      console.error('ERROR: ', err)
    }
  }

  return (
    <main>
      <header>
        <h1>{currentEvent.title}</h1>
      </header>
      <section>
        <Image
          src={currentEvent.image}
          width={600}
          height={600}
          alt={currentEvent.title}
        />
        <p>{currentEvent.description}</p>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <label>Get Registered for this event!</label>
          <input
            ref={emailInput}
            type="email"
            id="email"
            placeholder="Please insert your email here"
          />
        </form>
        <p>{message}</p>
      </section>
    </main>
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
