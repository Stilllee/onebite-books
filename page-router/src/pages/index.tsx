import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>인덱스</h1>
      <h2 className={styles.h2}>H2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
