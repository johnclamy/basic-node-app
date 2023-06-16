import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import Logo from "./Logo"
import NavLinks from './NavLinks'
import Drawer from "./Drawer"
import { useWindowSize } from "../hooks"
import styles from './Navbar.module.css'

export default function Navbar() {
  const size = useWindowSize()
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawer = () => setDrawerIsOpen(true)
  const closeDrawer = () => setDrawerIsOpen(false)

  return (
    <section className={styles.navbar}>
      <Logo />
      {size.width > 768 ?
        <NavLinks /> :
        <GiHamburgerMenu onClick={openDrawer} size={30} className={styles.hamburger} />}
      {drawerIsOpen && <Drawer onCloseDrawer={closeDrawer} />}
    </section>
  )
}