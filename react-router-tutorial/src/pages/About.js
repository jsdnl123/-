import { Link, useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  const location = useLocation();

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    console.log(mode);
    console.log(mode === null);
    console.log(typeof mode);
    const nextMode = mode === "null" ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트</p>
      <Link to={"/"}>홈 페이지</Link>
      <p>쿼리스트링: {location.search}</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>Mode +1</button>
    </div>
  );
};
export default About;
