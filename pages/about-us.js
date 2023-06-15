import Image from 'next/image'

export default function About() {
  return (
    <main>
      <Image
        src="/imgs/about.jpg"
        alt="office workers in a boardroom meeting"
        loading="lazy"
        width="640"
        height="427"
      />
      <section>
        <h1>
          Who we are and how we got here
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
          omnis voluptatem accusantium nemo perspiciatis delectus atque
          autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
          consequatur! Officiis id consequatur atque doloremque!
        </p>
        <p>
          {" "}
          Nobis minus voluptatibus pariatur dignissimos libero quaerat
          iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
          aspernatur quam mollitia.
        </p>
      </section>
    </main>
  )
}