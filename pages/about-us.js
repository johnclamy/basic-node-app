import Image from 'next/image'
import styles from '../styles/About-us.module.css'

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['image-container']}>
        <Image
          src="/imgs/about.jpg"
          alt="office workers in a boardroom meeting"
          loading="lazy"
          width="640"
          height="427"
        />
      </div>
      <section className={styles.container}>
        <h1 className={styles.title}>Who we are and how we got here</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
          voluptatem accusantium nemo perspiciatis delectus atque autem!
          Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
          Officiis id consequatur atque doloremque!
        </p>
        <p className={styles.text}>
          {" "}
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
          expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
          quam mollitia.
        </p>
      </section>
    </div>
  );
}