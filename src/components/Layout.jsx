import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";

export default function Layout({children}) {
  return (
    <>
      <Navbar />
        <div className={styles.container}>
          <main>{children}</main>
        </div>
      <Footer />
    </>
  );
}