import Link from 'next/link'

export default function NavLink({ label, route, isActive }) {
  return (
    <Link href={route}>
      <a className={`nav-link ${isActive ? 'active' : ''}`}>
        {label}
      </a>
    </Link>
  )
}
