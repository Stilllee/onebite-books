import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import fetchOneBook from "@/lib/fetch-one-book";
import styles from "./[id].module.css";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params!;
  const book = await fetchOneBook(Number(id));

  return {
    props: {
      book,
    },
  };
};

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return "문제가 발생했습니다. 다시 시도하세요.";

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={styles.container}>
      <div
        className={styles.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.author}>
        {author} | {publisher}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
