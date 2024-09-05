import { createReviewAction } from "@/actions/create-review.action";
import styles from "./review-editor.module.css";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <section>
      <form className={styles.form_container} action={createReviewAction}>
        <input type="bookId" value={bookId} hidden />
        <textarea
          required
          autoComplete="off"
          name="content"
          placeholder="리뷰 내용"
        />
        <div className={styles.submit_container}>
          <input
            required
            autoComplete="off"
            name="author"
            placeholder="작성자"
          />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
