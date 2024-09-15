"use client";

import { useActionState, useEffect } from "react";

import { createReviewAction } from "@/actions/create-review.action";
import styles from "./review-editor.module.css";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) alert(state.error);
  }, [state]);

  return (
    <section>
      <form className={styles.form_container} action={formAction}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea
          required
          autoComplete="off"
          name="content"
          placeholder="리뷰 내용"
          disabled={isPending}
        />
        <div className={styles.submit_container}>
          <input
            required
            autoComplete="off"
            name="author"
            placeholder="작성자"
            disabled={isPending}
          />
          <button disabled={isPending} type="submit">
            {isPending ? "..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
