import { BookData } from "@/types";
import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list.skeleton";
import { Suspense } from "react";

async function SearchResult({ q }: { q: string }) {
  // 검색 결과를 동적으로 가져오는 동적 페이지이기 때문에 풀 라우트 캐싱은 불가능
  // 데이터 캐시를 활용한 최적화만 가능
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const searchBooks: BookData[] = await response.json();

  return (
    <div>
      {searchBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  return (
    <Suspense
      key={searchParams.q || ""}
      fallback={<BookListSkeleton count={3} />}
    >
      <SearchResult q={searchParams.q || ""} />
    </Suspense>
  );
}
