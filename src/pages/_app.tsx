import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link"; // csr
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    return router.push("/test"); // programmatic Navigation
    // replace : 뒤로가기를 방지하며 페이지 이동
    // back : 페이지를 뒤로 이동
  };

  useEffect(() => {
    router.prefetch("/test");
  }, []);
  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>programmatic Navigation</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
