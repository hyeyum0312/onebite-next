import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();
  const { id } = router.query; // 배열로 저장된다.

  // http://localhost:3000/book/2/22/222/2222 이런 상황이라면~?
  // [...id].tsx로 파일을 생성하면 된다. catch all segment (모든 구간에 대응하는 페이지)

  // http://localhost:3000/book 이 경로라면 404페이지가 나온다. 이 경우엔?
  // 범용적으로 처리 하고 싶다면 [[...id]].tsx, optional all segment ("/"뒤에 어떤 경로가 오든, 혹은 안오든 모두 대응하는 페이지 )
  return <h1>book {id} </h1>;
}
