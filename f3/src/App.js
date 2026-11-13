import Child1 from "./Child1.js";
import Child2 from "./Child2.js";
import Child3 from "./Child3.js";
const name="Sahi"
const name2=100

const o={
  name:"Swaroop",
  age:40,
  clg:"gld"
}
const a=["apple","bat","cat"]
const App = () => {
  return (
    <>
      <h1>AIDSA</h1>
      <Child1 n={name} n1={name2}/>
      <h1>AIDSB</h1>
      <Child2 o={o}/>
      <h1>AIDSC</h1>
      <Child3 a={a}/>
    </>
  );
};
export default App;
