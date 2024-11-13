// import "./index.css"; // app컴포넌트에서만 이런방식으로 import할 수 있음, 충돌이 날 수 있기 때문
// CSS module로 처리! (자동으로 unique하게 )
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서 </h3>
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서 </h3>
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
