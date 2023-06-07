import { useState } from "react";
import Link from 'next/link';
import styles from './Navbar.module.css';
import utils from '../../styles/utils.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={styles["navbar-wrapper"]}>
      <div className={styles.navbar}>
        <Link href="/">
          <a className={utils.logo}>🎟️ tech events</a>
        </Link>
        <nav className={styles["nav-links"]}>
          <Link href="/">
            <a className={styles["nav-link"]}>home</a>
          </Link>
          <Link href="/events">
            <a className={styles["nav-link"]}>events</a>
          </Link>
          <Link href="/about">
            <a className={styles["nav-link"]}>about</a>
          </Link>
        </nav>
        <button className={styles.hamburger}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </section>
  );
}