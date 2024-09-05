import { ReviewData } from "@/types";
import styles from "./review-item.module.css";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  bookId,
}: ReviewData) {
  return (
    <div className={styles.container}>
      <div className={styles.author}>{author}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.bottom_container}>
        <div>{new Date(createdAt).toLocaleString()}</div>
        <div className={styles.delete_btn}>삭제하기</div>
      </div>
    </div>
  );
}
