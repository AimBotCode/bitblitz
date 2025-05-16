import styles from "../css/page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>bitblitz</title>
        <link rel="stylesheet" href="../css/page.module.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className={styles.header}>
          <Image
            src="/logo.png"
            alt=""
            width={200}
            height={200}
            className={styles.logoImg}
          />
          <div className={styles.flex}></div>
          <div className={styles.transition}>
            <Link href={"/aboutus"}>
              <button className={styles.transitionButton}>About Us</button>
            </Link>
            <Link href={"/faq"}>
              <button className={styles.transitionButton}>FAQ</button>
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
