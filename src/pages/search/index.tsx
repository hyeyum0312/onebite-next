import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";

// GetServerSidePropsContext : 매개변수 자체 제공 타입 , context 현재 브라우저로 받은 모든정보 포함,
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const q = context.query.q;

  const books = await fetchBooks(q as string);

  return {
    props: { books },
  };
};
export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book}></BookItem>
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
