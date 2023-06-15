import Link from 'next/link'
import styles from './NavLink.module.css'

export default function NavLink({ navLink }) {
  return (
    <Link href={navLink.route}>
      <a className={styles['nav-link']}>{navLink.name}</a>
    </Link>
  )
}