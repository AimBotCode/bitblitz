import styles from "../css/page.module.css";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

const geist = Geist({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <Layout>
      <div>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>bitblitz</h1>
          <a href="https://discord.gg/kRUZghp3TR">
            <button className={styles.discordButton}>Join our Discord!</button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
