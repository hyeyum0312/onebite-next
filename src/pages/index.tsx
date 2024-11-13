// import "./index.css"; // app컴포넌트에서만 이런방식으로 import할 수 있음, 충돌이 날 수 있기 때문
// CSS module로 처리! (자동으로 unique하게 )
import style from "./index.module.css";
export default function Home() {
  return (
    <>
      <h1 className={style.h1}>home</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}
