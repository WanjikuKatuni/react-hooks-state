import React, { useState } from "react";

function Counter() {

  // const countState = useState(0)
  // const count = countState[0]
  // const setCount = countState[1]


  const [count, setCount] = useState(0);

  function increment() {

    setCount(count + 1);


    setCount(count + 1);
  }

  // function increment(){
  //   setCount((currentCount) => currentCount +1)
  //   setCount((currentCount)=> currentCount +1)
  // }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
