// import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ReactNode, useEffect, useState } from "react";

import { BookData } from "@/types";
import BookItem from "@/components/book-item";
import Head from "next/head";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";

/* export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { q } = context.query;
  const books = await fetchBooks(q as string);

  return {
    props: {
      books,
    },
  };
}; */

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const { q } = router.query;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요."
        />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
