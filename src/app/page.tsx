import EmptyState from "@/components/EmptyStatePage/EmptyState";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <EmptyState />
    </main>
  );
}
