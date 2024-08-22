import { ReactNode, useEffect } from "react";

import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import styles from "./index.module.css";

export const getServerSideProps = () => {
  // 서버에서만 실행됨
  const data = "hello";

  return {
    props: {
      data,
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data); // 서버에서 한 번, 클라이언트에서 한 번 출력됨

  useEffect(() => {
    // 마운트 후 클라이언트에서만 실행됨
    console.log(window);
  }, []);

  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
