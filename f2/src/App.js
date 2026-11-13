import A from "./components/a"
import "./d.css"
import "./t.css"
const App=()=>{
  const buttonClick=()=>{
    alert("hi ra ledha button clicked")
  }
  const click2=()=>{
    alert("aidsb")
  }
  const name2=(event)=>{
    console.log(event.target.value)
  }
  const name3=(e)=>{
    console.log(e.target.value)
  }

  return(
    <>
    <h1 className="f">AIDSB</h1>
    <button onClick={click2}>Click2</button>
    <A/>
    <h1 className="u">AIDSC</h1>
    <input onChange={name3} placeholder="enter your name"/>
    <A/>
    <h1>AIDSA</h1>
    <A/>
    <button onClick={buttonClick}>Click</button>
    <input onChange={name2} placeholder="enter any thing"/>
    </>
  )
}
export default App