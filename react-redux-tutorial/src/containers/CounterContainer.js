import { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
export default CounterContainer;

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// //액션 생성 함수를 객체로 만들어 connect에 넣어주면
// // connect 내부적으로 bindActionCreators 해준다.
// const mapDispatchToProps = {
//   increase,
//   decrease,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
