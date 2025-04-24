import "./App.css";
function Counter(props){
  // props는 입력값이다
  console.log(props);
  return<div>
    <h1>{props.title}</h1>  
    {/* 중괄호 넣어서 가져옴 */}
    <button>+</button> {props.initValue} 
  </div>
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      <Counter title="손님 카운터" initValue={10}></Counter>
      {/* " " 안에 데이터를 넣으면 문자열! */}
      {/* { } 안에 넣으면 자바스크립트의 데이터 타입! */}
      
    </div>
    );
}

export default App;
