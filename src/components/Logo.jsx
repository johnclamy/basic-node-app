import Link from 'next/link'
import routes from '../routes'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link href={routes[0].route}>
      <a>
        🎟️ <b className={styles['logo-label']}>tech events</b>
      </a>
    </Link>
  )
}