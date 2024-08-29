import { ReactNode, Suspense } from "react";

import Searchbar from "@/components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Suspense로 감싼 컴포넌트는 Next.js 서버에서 사전 렌더링 진행시, 해당 컴포넌트의 비동기 작업이 종료될때까지 미완성 상태로 대체 UI를 보여준다.  */}
      <Suspense fallback={<div>로딩중...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
