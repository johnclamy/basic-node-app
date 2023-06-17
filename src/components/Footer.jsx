import Link from "next/link";
import styles from "../components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles.wrapper}>
        <section className={styles["footer-top"]}>
          {" "}
          {/* footer top section */}
          <p className={styles.tools}>
            Website built with <a href="https://nextjs.org/">Next.js</a> and
            hosted on <a href="https://vercel.com/">Vercel</a>.
          </p>
          <div className={styles["unsplashed-container"]}>
            {/* unsplash photo credits section */}
            <img
              src="/icons/unspash.png"
              alt="unsplash logo"
              width={45}
              height={45}
            />
            <div>
              <p>
                Photos by{" "}
                <a href="https://unsplash.com/@lucas_davies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Lucas Davies,
                </a>{" "}
                <a href="https://unsplash.com/@chriskaridis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Chris Karidis,
                </a>{" "}
                <a href="https://unsplash.com/@aayush_gupta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Aayush Gupta
                </a>{" "}
                and{" "}
                <a href="https://unsplash.com/@campaign_creators?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Campaign Creators
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/photos/iP8ElEhqHeY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </div>
          </div>{" "}
          {/* end of unsplash photo credits section */}
          <div className={styles["pixabay-container"]}>
            {" "}
            {/* pixabay photo credits section */}
            <img
              src="/icons/pixabay.png"
              alt="Pixabay icon"
              width={45}
              height={45}
            />
            <div>
              <p>
                Image by{" "}
                <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=303341">
                  Clker-Free-Vector-Images
                </a>{" "}
                from{" "}
                <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=303341">
                  Pixabay
                </a>
                .
              </p>
            </div>
            {/* end of pixabay photo credits section */}
          </div>
        </section>{" "}
        {/* end of footer top section */}
        <section>
          <p className={styles["flaticon-credits"]}>
            <a
              href="https://www.flaticon.com/free-icons/network"
              title="network icons"
            >
              Network icons created by Pixel perfect - Flaticon
            </a>{" "}
          </p>
          <nav className={styles["footer-nav"]}>
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
          </nav>
        </section>{" "}
      </div>{" "}
      {/* end of footer wrapper */}
    </footer>
  );
}