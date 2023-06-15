import { GiHamburgerMenu } from "react-icons/gi"
import Logo from "./Logo"
import NavLinks from './NavLinks'
import { useWindowSize } from "../hooks"
import styles from './Navbar.module.css'

export default function Navbar() {
  const size = useWindowSize()

  return (
    <section className={styles.navbar}>
      <Logo />
      {size.width > 768 ?
        <NavLinks /> :
        <GiHamburgerMenu size={30} className={styles.hamburger} />}
    </section>
  )
}