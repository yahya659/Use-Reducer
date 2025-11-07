import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, sup, mult, duvc } from './futsher/caucl/calcSlice'
function App() {
  const resultstate = useSelector((state) => {
   
    return state.calc.result1;   
     
  })
  console.log(resultstate)
  const despach = useDispatch();
  const [firstnumberinput, setfirstnumberinput] = useState(null)
  const [Secoundnumberinput, setsecoundnumberinput] = useState(null)
  const [result, setresult] = useState(null)
  // const[result2,setresult2]=useReducer()


  //  useReducer function


  function handelsumclick() {
    despach(add({ firstnumber: firstnumberinput, Secoundnumber: Secoundnumberinput }));//firstnumber: firstnumberinput, Secoundnumber: Secoundnumberinput هو actionال  

  }
  function handelsubclick() {
    despach(sup({ firstnumber: firstnumberinput, Secoundnumber: Secoundnumberinput }));

  }
  function handelmultclick() {
    despach(mult({ firstnumber: firstnumberinput, Secoundnumber: Secoundnumberinput }));


  }
  function handelduvclick() {
    despach(duvc({ firstnumber: firstnumberinput, Secoundnumber: Secoundnumberinput }));

  }
  return (
    <div
      style={{
        backgroundColor: "green",
        height: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1>FirstNumbr</h1>

      <input
        value={firstnumberinput}
        onChange={(e) => setfirstnumberinput(e.target.value)}
      />

      <h1>SecoundNumbr</h1>

      <input
        value={Secoundnumberinput}
        onChange={(e) => setsecoundnumberinput(e.target.value)}
      />

      <button onClick={handelsumclick}>sum</button>
      <button onClick={handelsubclick}>sup</button>
      <button onClick={handelmultclick}>mult</button>
      <button onClick={handelduvclick}>duv</button>
      {/* <h2>{result}</h2> */}
      <h2>{resultstate}</h2>
      
      {/* <h2>{result}</h2> */}
    </div>
  );
}
export default App;
