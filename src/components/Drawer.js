import Link from "next/link"
import { AiFillCloseCircle } from "react-icons/ai";
import routes from "../routes"
import styles from "./Drawer.module.css"

export default function Drawer({ onCloseDrawer }) {
  return (
    <div className={styles.drawer}>
      <div className={styles["close-btn-container"]}>
        <AiFillCloseCircle
          size={40}
          className={styles["close-btn"]}
          onClick={onCloseDrawer}
        />
      </div>
      <div className={styles["drawer-links"]}>
        <Link href={routes[0].route}>
          <a className={styles["drawer-item"]} onClick={onCloseDrawer}>
            {routes[0].name}
          </a>
        </Link>
        <Link href={routes[1].route}>
          <a className={styles["drawer-item"]} onClick={onCloseDrawer}>
            {routes[1].name}
          </a>
        </Link>
        <Link href={routes[2].route}>
          <a className={styles["drawer-item"]} onClick={onCloseDrawer}>
            {routes[2].name}
          </a>
        </Link>
      </div>
    </div>
  );
}