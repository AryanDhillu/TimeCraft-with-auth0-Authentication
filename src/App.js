import Makeschedule from "./components/Makeschedule";
import Table from "./components/Table";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { useAuth0 } from "@auth0/auth0-react";




function App() {

const [data,setData] = useState([])
const { isAuthenticated, user } = useAuth0();


const get_data = async() => {
    const res = await fetch('http://localhost:5000/slots/d899',{
      method : 'GET',
      header : {
        'Content-type' : 'application/json',
      },
    })
    const data1 = await res.json()
    setData(data1)
    console.log(data1)
  }
  // get_data()




  
// in below line 12 the /6937 should be replaced by the id on json specified resourse that is to replace
// it works fine with POST but to replace we need to use the PUT which changes the whole thing
// u can use string literal like `http://localhost:5000/tasks/${id}` but u need to send the id as the prop to newslots function.
const newslots = async(slots) => {
  const res = await fetch('http://localhost:5000/slots/d899',{
    method : 'PUT',
    header : {
      'Content-type' : 'application/json',
    },
    body : JSON.stringify(slots)
  })
  const data = await res.json()
  // console.log(data)
}

  return (
    <Router>
      <Navbar set_data={get_data}/>
      <Routes>  
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/makeschedule" element={<Makeschedule onAdd={newslots}/>} />
        <Route exact path="/viewschedule" element={<Table data={data}/>}/>
      </Routes>
    </Router>



    // <>
    // <Navbar />
    // {/* // <Makeschedule onAdd={newslots}/> */}
    // <Table data={data}/>
    // </>
  );
}

export default App;
