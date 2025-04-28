import "./App.css";
import { useEffect, useState } from "react";
// function Counter(props){
//   // props는 입력값이다
//   const countState = useState(props.initValue);
//   const count = countState[0];
//   const setCount = countState[1];
//   console.log(countState);
//   // 첫 번째 원소 : 상태의 값
//   // 두 번째 원소 : 상태의 값을 바꿀 때 호출하는 함수
//   function up(){
//     setCount(count+1);
//     // props는 외부에서 내부로 주입되는 상태
//     // state는 내부적으로 사용하는 상태
//   }
//   function down(){
//     setCount(count-1);
//   }
  
//   return<div>
//     <h1>{props.title}</h1>  
//     {/* 중괄호 넣어서 가져옴 */}
//     <button onClick={up}>+</button>{count} <button onClick={down}>-</button>
//   </div>
// }

function Counter({title,initValue}){
// function Counter(props){
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([5,5]);

  // 상태의 값이 배열이나 객체면
  // 원본을 수정하지말고 복제본을 수정!
  function up(){
    const newCount = count + step;
    setCount(newCount)
    const newHistory = [...history];
    newHistory.push(newCount)
    setHistory(newHistory);
  }
  function down(){
    const newCount = count - 1;
    setCount(newCount)
    const newHistory = [...history];
    newHistory.push(newCount)
    setHistory(newHistory);
  }
  
  const stepHandler = (evt) => {
    console.log('change', evt.target.value);
    setStep(Number(evt.target.value));
  };
  const style = { border: '10px solid black', padding:10, backgroundColor:'tomato'};
  return <div style={style}>
    <h1>{title}</h1>  
    <button onClick={down}>-</button>
    <button onClick={up}>+</button>
    <input type="number" value={step} onChange={stepHandler}/>
    {count}
    <ol>
      {history.map((e, index)=><li key={index}>{e}</li>)}
    </ol>
  </div>
}

function CounterUseEffect(){
  const [count, setCount] = useState(0);
  console.log('CounterUserEffect', count);
  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(oldCount => oldCount + 1); //콜백함수
    }, 1000)
    return () =>{   // 리턴 함수는 위의 코드를 정리할 때 쓰는 함수
      console.log('clean');
      clearInterval(id);
      // useEffect의 리턴값은 정리할 때 사용!
      // 1. 컴포넌트가 지워졌을 때
      // 2. useEffect가 재실행될 때
    }
  },[]);
  
  
  // 사이드 이펙트 : 부작용
  // 사이드 이펙트는 별도로 격리한다.(예측 가능성이 떨어지기 때문에)
  // 사이드 이펙트는 useEffect로 격리한다.

  // []빈 배열을 넣으면 처음 컴포넌트가 렌더링될 때 딱 한번만 useEffect 안에 있는 코드가 실행됨
  // []없이 작성하면 컴포넌트가 렌더링 될 때마다 계속 useEffect가 실행됨
  // [count]로 작성하면 count가 실행될때만 실행하게 함

  //set함수의 값은 값일 수도 있고 함수일 수도 있다.
  // 함수일때는 첫번째 파라미터는 현재의 state값이다.(최신값)

  return <div style={{border: '10px solid black', padding:10}}>
    <h1>useEffect Counter</h1> {count}
  </div>
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      {/* " " 안에 데이터를 넣으면 문자열! */}
      {/* { } 안에 넣으면 자바스크립트의 데이터 타입! */}
      <CounterUseEffect></CounterUseEffect>
      
    </div>
    );
}

export default App;
