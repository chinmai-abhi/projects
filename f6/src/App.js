import axios from "axios";
import { useEffect, useState } from "react";
import "./s.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [marks, setMarks] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [did,setDid]=useState("")
  const [uid,setUid]=useState("")

  const Add = async () => {
    const response = await axios.post(
      "http://localhost:5001/ma/create_student",
      {
        name: name,
        age: age,
        gender: gender,
        course: course,
        year: year,
        marks: marks,
        city: city,
        email: email,
      },
    );
    console.log(response);
    alert(response.data);
    setName("");
    setAge("");
    setCity("");
    setCourse("");
    setEmail("");
    setGender("");
    setMarks("");
    setYear("");
  };
  useEffect(() => {
    const getstudents = async () => {
      const response = await axios.get("http://localhost:5001/ma/students");
      // await console.log(response.data)
      setStudents(response.data);
    };
    getstudents();
  }, [setStudents, Add]);
  // console.log(students)

  const c = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const ag = (e) => {
    setAge(e.target.value);
    console.log(age);
  };
  const ge = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };
  const co = (e) => {
    setCourse(e.target.value);
    console.log(course);
  };
  const ye = (e) => {
    setYear(e.target.value);
    console.log(year);
  };
  const ma = (e) => {
    setMarks(e.target.value);
    console.log(marks);
  };
  const ci = (e) => {
    setCity(e.target.value);
    console.log(city);
  };
  const em = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const cdid=(e)=>{
    console.log(e.target.value)
    setDid(e.target.value)

  }
  const Delete=async()=>{
    const res= await axios.delete(`http://localhost:5001/ma/delete/${did}`)
    console.log(res)
  }
  const UniDelete=async(e)=>{
    // console.log(e)
    const res= await axios.delete(`http://localhost:5001/ma/delete/${e._id}`)
    console.log(res)
  }
  const cuid=(e)=>{
    setUid(e.target.value)
    console.log(uid)
  }
  const [un,setUn]=useState("")
  const cun=(e)=>{
    setUn(e.target.value)
  }
  const Update=async()=>{
    const res=await axios.put(`http://localhost:5001/ma/update/${uid}`,{name:un})
    console.log(res)
    setUid("")
    setUn("") 
  }
  const UniUpdate=(e)=>{
    setUid(e._id)
  }

  return (
    <>
      <h1>AIDSA</h1>
      <label>Name:</label>
      <input
        placeholder="enter you name"
        value={name}
        onChange={c}
        type="text"
      />
      <br />
      <label>Age:</label>
      <input
        placeholder="enter you age"
        type="number"
        value={age}
        onChange={ag}
      />
      <br />
      <label>Gender:</label>
      <input
        type="text"
        placeholder="enter you gender"
        value={gender}
        onChange={ge}
      />
      <br />
      <label>Course:</label>
      <input
        type="text"
        placeholder="enetr your course"
        value={course}
        onChange={co}
      />
      <br />
      <label>Year:</label>
      <input
        type="number"
        placeholder="enter your year"
        value={year}
        onChange={ye}
      />
      <br />
      <label>Marks:</label>
      <input
        type="number"
        placeholder="enter your marks"
        value={marks}
        onChange={ma}
      />
      <br />
      <label>City:</label>
      <input
        type="text"
        placeholder="enter your city"
        value={city}
        onChange={ci}
      />
      <br />
      <label>Email:</label>
      <input
        type="text"
        placeholder="enter yopu email"
        value={email}
        onChange={em}
      />
      <br />

      <button onClick={Add}>Add</button>
      <br/>
      {/* <input placeholder="enter deleted id" value={did} onChange={cdid}/>
      <br/>
      <button onClick={()=>Delete()}>Delete</button> */}
      <input placeholder="updated id" value={uid} onChange={cuid}/>
      <br/>
      <input placeholder="updated name" value={un} onChange={cun}/>
      <br/>
      <button onClick={()=>Update()}>Update</button>


      {students.map((e) => (
        <div className="mc" key={e._id}>
          <div className="card">
            <p >Name : {e.name}</p>
            <p>id: {e._id}</p>
            <p>Age :{e.age}</p>
            <p>Course :{e.course}</p>
            <p>Year : {e.year}</p>
            <p>Marks : {e.marks}</p>
            <p> City : {e.city}</p>
            <p>Email : {e.email}</p>
            <button onClick={()=>UniDelete(e)}>Delete</button>
            <button onClick={()=>UniUpdate(e)}>Update</button>

          </div>
        </div>
      ))}
    </>
  );
};
export default App;
