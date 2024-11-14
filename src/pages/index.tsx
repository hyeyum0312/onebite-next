// import "./index.css"; // app컴포넌트에서만 이런방식으로 import할 수 있음, 충돌이 날 수 있기 때문
// CSS module로 처리! (자동으로 unique하게 )
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async () => {
  // 컴포넌트 보다 먼저 실행 되어서 페이지에 필요한 데이터를 먼저 불러오는 함수
  // 객체반환 {props: {data}}
  // window.location은 서버환경에서만 실행되는 getServerSideProps에서 브라우저를 읽을 수 없으므로 undefined가 된다.
  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);
  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

// 브라우저 접속요청을 받았을 때 서버에서 먼저 한번 실행 후 , 브라우저에서 실행된다.
// 1. 사전렌더링을 위해 서버측에서 먼저 실행된다.
// 3. 브라우저 Js번들형태로 전달되어 하이드레이션 과정 진행될때 실행된다.
// InferGetServerSidePropsType : getServerSideProps함수의 반환값 타입을 자동으로 추론 한다.
export default function Home({ allBooks, recoBooks }: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서 </h3>
          {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서 </h3>
          {allBooks.map((book) => (
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
