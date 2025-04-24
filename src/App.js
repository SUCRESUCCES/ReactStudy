import "./App.css";
import { useState } from "react";
function Counter(props){
  // props는 입력값이다
  let countState = useState(props.initValue);
  let count = countState[0];
  let setCount = countState[1];
  console.log(countState);
  // 첫 번째 원소 : 상태의 값
  // 두 번째 원소 : 상태의 값을 바꿀 때 호출하는 함수
  function up(){
    setCount(count+1);
    // props는 외부에서 내부로 주입되는 상태
    // state는 내부적으로 사용하는 상태
  }
  function down(){
    setCount(count-1);
  }
  
  return<div>
    <h1>{props.title}</h1>  
    {/* 중괄호 넣어서 가져옴 */}
    <button onClick={up}>+</button>{count} <button onClick={down}>-</button>
  </div>
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      {/* " " 안에 데이터를 넣으면 문자열! */}
      {/* { } 안에 넣으면 자바스크립트의 데이터 타입! */}
      
    </div>
    );
}

export default App;
