import { BookData } from "@/types";
import { notFound } from "next/navigation";
import style from "./page.module.css";

// 만약, 1, 2, 3을 제외한 나머지 숫자에 대해 전부 404 페이지를 보여주고 싶다면
// (4, 5, 6, ... 등 데이터가 존재해도) 아래와 같이 dynamicParams를 false로 설정하면 됨
// export const dynamicParams = false;

// 앱 라우터의 generateStaticParams 함수는 페이지 라우터의 getStaticPaths 함수와 유사
// 주의 1. 파라미터 값은 문자열로 작성할 것
// 주의 2. 데이터 페칭에 데이터 캐싱이 설정되어 있지 않더라도, 해당 페이지는 정적 페이지로 강제 설정됨
// "book/1", "book/2", "book/3" 페이지에 대한 정적 경로를 빌드 타임에 생성
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다.</div>;
  }

  const book: BookData = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
