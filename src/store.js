// 액션
export const increase = (username) => ({
  type: "INCREMENT",
  payload: username,
});
export const decrease = () => ({ type: "DECREMENT" });

// 상태

const initstate = { username: "", number: 1 };

// 액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => {
  switch (action.type) {
    // 얘네는 return 시 호출 쪽이 받는 게 아니라 ui가 변경되는 것.
    case "INCREMENT":
      return { number: state.number + 1, username: action.payload };
    case "DECREMENT":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
