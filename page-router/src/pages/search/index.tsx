import BookItem from "@/components/book-item";
import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
