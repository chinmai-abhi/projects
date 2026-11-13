// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import H from './h'
// import Home from './home'
// import Contact from './contact'
// import Pictures from './Pictures'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <H/>
//       <Routes>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/pictures" element={<Pictures/>}/>
//       </Routes>
//       </BrowserRouter>

//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("hi");
  useEffect(() => {
    if (name === "hi") {
      setName("Pranav");
    } 
    else {
      setName("Sahi");
    }
  }, [setName]);

  return <div>{name}</div>;
};

export default App;
