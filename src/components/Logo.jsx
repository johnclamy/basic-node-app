import Link from 'next/link'
import routes from '../routes'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <b className={styles.logo}>
      <Link href={routes[0].route}>
        🎟️ tech events
      </Link>
    </b>
  );
}